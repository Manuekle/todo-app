/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useTask } from '../context/taskProvider';
import Trash from '../../public/icons/trash';
import Edit from '../../public/icons/edit';
import Done from '../../public/icons/done';
import Cancel from '../../public/icons/cancel';

function actions({ id, isEdit, setIsEdit, setToastRemove }) {
  const { deleteTask } = useTask();

  const deleteHandler = () => {
    deleteTask(id);
    setToastRemove(true);
  };

  return (
    <div className="flex items-center gap-2">
      {isEdit && (
        <>
          <button
            type="button"
            onClick={() => setIsEdit(!isEdit)}
            className="flex items-center border rounded-md p-1 bg-white hover:bg-[#d4e07d]/10"
          >
            <span className="h-5 w-5">
              <Done />
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsEdit(false)}
            className="flex items-center border rounded-md p-1 bg-white hover:bg-[#d4e07d]/10"
          >
            <span className="h-5 w-5">
              <Cancel />
            </span>
          </button>
        </>
      )}
      {!isEdit && (
        <>
          <button
            type="button"
            onClick={() => setIsEdit(!isEdit)}
            className="flex items-center border rounded-md p-1 bg-white hover:bg-[#66B7E9]/10"
          >
            <span className="h-5 w-5">
              <Edit />
            </span>
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="flex items-center border rounded-md p-1 bg-white hover:bg-[#CB8BA4]/10"
          >
            <span className="h-5 w-5">
              <Trash />
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default actions;
