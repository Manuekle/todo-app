/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useState } from 'react';

const checkbox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        id="myCheckbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <label htmlFor="myCheckbox" className="flex items-center cursor-pointer">
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
          <h1 className="text-lg">{text}</h1>
        </span>
      </label>
    </div>
  );
};

export default checkbox;
