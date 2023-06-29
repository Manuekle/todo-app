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
  // const [tasks, setTasks] = useState(() => {
  //   const localData = localStorage.getItem('tasks');
  //   return localData ? JSON.parse(localData) : [];
  // });

  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const createTask = (text, isChecked) => {
    setTasks([...tasks, { id: uuidv4(), text, isChecked }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <taskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </taskContext.Provider>
  );
};
