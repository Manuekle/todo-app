import React from 'react';

function empty({ text }) {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <span className="text-2xl text-center text-[#758FB9]/60">{text}</span>
    </div>
  );
}

export default empty;
