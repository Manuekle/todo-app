import React from 'react';

import Trash from '../../public/icons/trash';
import Edit from '../../public/icons/edit';

function actions() {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="flex items-center border rounded-md p-1 bg-white hover:bg-[#66B7E9]/10"
      >
        <span className="h-5 w-5">
          <Edit />
        </span>
      </button>
      <button
        type="button"
        className="flex items-center border rounded-md p-1 bg-white hover:bg-[#66B7E9]/10"
      >
        <span className="h-5 w-5">
          <Trash />
        </span>
      </button>
    </div>
  );
}

export default actions;
