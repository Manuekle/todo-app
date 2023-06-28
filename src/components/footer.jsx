import React from 'react';
import Image from 'next/image';
import Sleep from '../../public/images/sleep.png';
import Heart from '../../public/icons/heart';

function footer() {
  return (
    <div className="flex flex-col justify-center items-center pb-8 -mt-10">
      <Image className="object-cover w-56 h-56" src={Sleep} alt="sleep" />
      <span className="flex flex-row gap-2 justify-center items-center xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-lg bg-[#F8FAFC] p-4 rounded-xl shadow-lg shadow-[#758FB9]/30">
        <h1 className="text-[#00C3F1]">Lovingly developed</h1>
        <span className="fill-[#cb8ba4] xl:h-5 xl:w-5 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-4 sm:w-4 h-4 w-4">
          <Heart />
        </span>
        <a
          className="text-[#CB9365] underline"
          href="https://manuekle.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Manuel
        </a>
      </span>
    </div>
  );
}

export default footer;
