/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Checkbox from './checkbox';
import Actions from './actions';

function Task({ text }) {
  return (
    <article className="flex flex-col gap-1">
      <span className="flex justify-between items-center">
        <Checkbox text={text} />
        <Actions />
      </span>
      <hr className="border rounded-full border-[#758FB9]/60" />
    </article>
  );
}

export default Task;
