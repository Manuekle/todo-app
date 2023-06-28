import React from 'react';
import Heart from '../../public/icons/heart';

function add() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 border border-[#f3bbd0] rounded-md px-4 py-1 bg-[#FFC7DD]"
    >
      <span className="text-lg text-[#cb8ba4]">Add new task</span>
      <span className="fill-[#cb8ba4]">
        <Heart />
      </span>
    </button>
  );
}

export default add;
