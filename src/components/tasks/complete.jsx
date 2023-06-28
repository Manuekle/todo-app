import React from 'react';

const complete = ({ num }) => (
  <div className="bg-[#F1EEC5] rounded-lg p-2 shadow-md shadow-[#685E52]/30">
    <h1 className="text-[#685E52] rounded-lg border-2 border-dashed border-[#685E52]/80 px-6 py-2">
      tasks: {num}
    </h1>
  </div>
);

export default complete;
