/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import Checkbox from './checkbox';
import Actions from './actions';

function Task({ id, task, isCheck, setToastRemove }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <article className="flex flex-col gap-1">
      <span className="flex justify-between items-center">
        <Checkbox id={id} task={task} isCheck={isCheck} isEdit={isEdit} />
        <Actions
          id={id}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setToastRemove={setToastRemove}
        />
      </span>
      <hr className="border rounded-full border-[#758FB9]/60" />
    </article>
  );
}

export default Task;
