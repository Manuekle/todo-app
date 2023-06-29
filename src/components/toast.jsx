/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import Image from 'next/image';
import * as Toast from '@radix-ui/react-toast';

function toast({ open, setOpen, res }) {
  return (
    <Toast.Provider swipeDirection="bottom" className="fixed">
      <Toast.Root
        className={`w-96 ToastRoot cursor-move mx-4 my-4 border py-2 px-4 rounded-xl ${res[0].card}`}
        open={open}
        onOpenChange={setOpen}
      >
        <article className="flex justify-between items-center">
          <span className="flex flex-row gap-2 items-center">
            <Image
              className="object-cover w-10 h-10"
              src={res[0].image}
              alt={res[0].alt}
            />
            <h1
              className={`xl:text-xl lg:text-md md:text-md sm:text-md text-md ${res[0].text}`}
            >
              {res[0].message}
            </h1>
          </span>
          <Toast.Action asChild altText="success" className="cursor-pointer">
            <button
              type="button"
              className={`font-bold xl:text-2xl lg:text-md md:text-md sm:text-md text-md ${res[0].hover} transition duration-300 ease-in-out`}
            >
              x
            </button>
          </Toast.Action>
        </article>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport flex justify-center items-center w-full top-0" />
    </Toast.Provider>
  );
}

export default toast;
