import React from 'react';
import Heart from '../../public/icons/heart';

function add({ open, setOpen }) {
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <button
      onClick={handleOpen}
      type="button"
      className="flex items-center gap-2 border border-[#f3bbd0] rounded-md bg-[#FFC7DD] hover:bg-[#f3bbd0] hover:text-[#FFC7DD] transition-all duration-300 ease-in-out shadow-md shadow-[#f3bbd0]/30 px-4 py-1"
    >
      <span className="text-[#cb8ba4] xl:text-lg lg:text-lg md:text-base sm:text-base text-base">
        Add new task
      </span>
      <span className="fill-[#cb8ba4]">
        <Heart />
      </span>
    </button>
  );
}

export default add;
