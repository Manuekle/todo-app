'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useTask } from '../context/taskProvider';
import Toast from '../components/toast';
import Loader from '../components/loader';
import Modal from '../components/modal';
import Task from '../components/task';
import Add from '../components/add';
import Complete from '../components/tasks/complete';
import Empty from '../components/empty';
import Cinnamoroll from '../../public/images/cinnamoroll.png';
import Backstep from '../../public/images/backstep.png';
import Love from '../../public/images/love.png';
import Error from '../../public/images/error.png';

export default function Home() {
  const { tasks } = useTask();

  const [open, setOpen] = useState(false);
  const [toastSucces, setToastSucces] = useState(false);
  const [toastRemove, setToastRemove] = useState(false);

  const [loading, setLoading] = useState(true);

  const success = [
    {
      message: 'Task successfully added!',
      card: 'border-[#bbc66f] bg-[#D4E07D] shadow-lg shadow-[#bbc66f]/30',
      text: 'text-[#96a14d]',
      hover: 'text-[#96a14d] hover:text-[#96a14d]/80',
      image: Love,
      alt: 'success'
    }
  ];
  const remove = [
    {
      message: 'Task successfully deleted!',
      card: 'border-[#f3bbd0] bg-[#FFC7DD] shadow-lg shadow-[#f3bbd0]/30',
      text: 'text-[#cb8ba4]',
      hover: 'text-[#cb8ba4] hover:text-[#cb8ba4]/80',
      image: Error,
      alt: 'remove'
    }
  ];

  const completedTasks = tasks.filter((task) => task.isChecked);

  useEffect(() => {
    if (tasks.length > 0) {
      setOpen(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [tasks]);

  return (
    <>
      {toastSucces && (
        <Toast open={toastSucces} setOpen={setToastSucces} res={success} />
      )}
      {toastRemove && (
        <Toast open={toastRemove} setOpen={setToastRemove} res={remove} />
      )}
      <main className="grid my-16 gap-6 xl:place-content-center lg:place-content-center md:px-56 sm:px-12 px-8">
        <span className="text-[#685E52] flex flex-row items-center justify-start gap-2 xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-lg">
          Date:
          <h1 className="text-[#685E52]/80">
            {new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}
          </h1>
        </span>
        <section className="border relative rounded-xl shadow-lg shadow-[#758FB9]/30 bg-slate-50 px-auto h-full xl:px-20 pb-40 lg:px-16 md:px-12 sm:px-8 px-8">
          <article className="flex flex-row items-center xl:gap-12 xl:justify-between lg:gap-10 lg:justify-between md:gap-8 md:justify-between sm:gap-6 sm:justify-between gap-4 justify-between">
            <Image
              className="object-cover xl:w-64 xl:h-64 lg:w-56 lg:h-56 md:w-40 md:h-40 sm:w-40 sm:h-40 w-36 h-36"
              src={Cinnamoroll}
              alt="cinnamoroll"
            />
            <span className="flex flex-col justify-center items-center xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl text-4xl">
              <h1 className="text-[#758FB9]">TO-DO</h1>
              <h1 className="tracking-wider text-[#758FB9]">list</h1>
            </span>
          </article>
          <div className="flex justify-end items-center pb-2">
            <Add open={open} setOpen={setOpen} />
          </div>
          <div className="bg-white/50 backdrop-opacity-50 z-10 relative flex flex-col gap-8 border-[#758FB9]/30 border-2 rounded border-dashed p-6 h-80 overflow-y-auto">
            {loading && <Loader />}
            {!loading && tasks.length === 0 && <Empty text="No assignments" />}
            {!loading &&
              tasks.length > 0 &&
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  task={task.text}
                  isCheck={task.isChecked}
                  setToastRemove={setToastRemove}
                />
              ))}
          </div>
          <div className="z-0 absolute right-0 bottom-0">
            <Image
              className="z-0 object-cover xl:w-64 xl:h-64 lg:w-56 lg:h-56 md:w-40 md:h-40 sm:w-40 sm:h-40 w-36 h-36"
              src={Backstep}
              alt="backstep"
            />
          </div>
          <div className="absolute flex xl:bottom-20 xl:left-20 lg:bottom-16 lg:left-16 md:bottom-12 md:left-12 sm:bottom-12 sm:left-12 bottom-12 left-8">
            <Complete num={completedTasks.length} />
          </div>
        </section>
      </main>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={
            ({ opacity: 0, transition: { duration: 0.2 } }, { display: 'none' })
          }
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
          style={{
            backdropFilter: 'blur(5px)'
          }}
        >
          <Modal setOpen={setOpen} setToastSucces={setToastSucces} />
        </motion.div>
      )}
    </>
  );
}
