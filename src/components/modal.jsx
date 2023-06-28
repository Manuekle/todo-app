/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTask } from '../context/taskProvider';
import Normal from '../../public/images/normal.png';

function modal({ setOpen }) {
  const [task, setTask] = useState();
  const { createTask } = useTask();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.text, false);
    setOpen(false);
  };

  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 border relative rounded-xl bg-slate-50 xl:p-6 xl:w-96 lg:p-6 lg:w-96 md:p-6 md:w-80 sm:p-6 sm:w-80 p-6 w-72"
      >
        <span className="flex flex-row items-center justify-between">
          <h1 className="tracking-widest text-[#66B7E9] xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl">
            Add new task!
          </h1>
          <Image
            className=" object-cover xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-12 sm:h-12 w-12 h-12"
            src={Normal}
            alt="normal"
          />
        </span>
        <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
          <input
            type="text"
            name="text"
            onChange={handleChange}
            className="relative w-full border-2 border-dashed border-[#66B7E9]/30 rounded-md px-4 py-2 outline-none xl:text-xl lg:text-lg md:text-md sm:text-md text-md text-[#8d969c] shadow-xs shadow-[#66B7E9]/30"
            placeholder="ex: Buy a coffee"
          />
        </span>
        <div className="flex flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={!task}
            className="flex items-center gap-2 border border-[#bbc66f] rounded-md px-4 py-1 bg-[#DDE983] hover:bg-[#d4e07d] transition-all duration-300 ease-in-out shadow-md shadow-[#bbc66f]/30"
          >
            <span className="xl:text-lg lg:text-md md:text-md sm:text-md text-md text-[#96a14d]">
              Add
            </span>
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 border border-[#f3bbd0] rounded-md px-4 py-1 bg-[#FFC7DD] hover:bg-[#f3bbd0] transition-all duration-300 ease-in-out shadow-md shadow-[#f3bbd0]/30"
          >
            <span className="xl:text-lg lg:text-md md:text-md sm:text-md text-md text-[#cb8ba4]">
              Cancel
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default modal;
