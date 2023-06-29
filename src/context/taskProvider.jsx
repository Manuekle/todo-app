/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const taskContext = createContext();

export const useTask = () => {
  const context = useContext(taskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const taskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('tasks');
    const parsedTasks = localData ? JSON.parse(localData) : [];
    setTasks(parsedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (text, isChecked) => {
    setTasks([...tasks, { id: uuidv4(), text, isChecked }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const updateTask = (id, text) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
  };

  return (
    <taskContext.Provider
      value={{ tasks, createTask, deleteTask, updateStatus, updateTask }}
    >
      {children}
    </taskContext.Provider>
  );
};
