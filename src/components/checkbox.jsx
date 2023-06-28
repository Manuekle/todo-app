/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useState } from 'react';

const checkbox = ({ task, isCheck, isEdit }) => {
  const [isChecked, setIsChecked] = useState(isCheck);

  const [title, setTitle] = useState(task);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        id={task}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <label htmlFor={task} className="flex items-center cursor-pointer">
        <div className="relative">
          <div className="w-6 h-6 bg-white border border-gray-300 rounded-full shadow-sm transition duration-200 ease-in-out">
            {isChecked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-2 h-2 text-[#758FB9] pointer-events-none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M5.718 11.385L2.294 7.961a.718.718 0 0 1 0-1.018l1.06-1.06a.718.718 0 0 1 1.018 0l2.346 2.347 6.428-6.428a.718.718 0 0 1 1.018 0l1.06 1.06a.718.718 0 0 1 0 1.018l-8.095 8.095a.718.718 0 0 1-1.018 0z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <span
          className={`ml-3 text-[#758FB9] ${
            isChecked ? 'line-through text-[#758FB9]/50' : ''
          }`}
        >
          {isEdit ? (
            <input
              type="text"
              onChange={handleChange}
              value={title}
              className="text-lg outline-none bg-transparent border-none"
            />
          ) : (
            <h1 className="text-lg">{task}</h1>
          )}
        </span>
      </label>
    </div>
  );
};

export default checkbox;
