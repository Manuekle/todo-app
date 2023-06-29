import React from 'react';

function cancel(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.8 13a.8.8 0 00-.8.8v.4a.8.8 0 00.8.8h12.4a.8.8 0 00.8-.8v-.4a.8.8 0 00-.8-.8H7.8z"
        fill="#CB8BA4"
      />
      <path
        clipRule="evenodd"
        d="M14 1C6.82 1 1 6.82 1 14s5.82 13 13 13 13-5.82 13-13S21.18 1 14 1zM3 14C3 7.925 7.926 3 14 3s11 4.925 11 11-4.926 11-11 11S3 20.075 3 14z"
        fill="#CB8BA4"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default cancel;
