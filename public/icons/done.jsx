import React from 'react';

function done(props) {
  return (
    // <svg
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <path
    //     d="M19.548 7.267a2 2 0 10-3.096-2.533L8.666 14.25 6.2 12.4a2 2 0 00-2.4 3.2l3.233 2.425a3 3 0 004.122-.5l8.393-10.258z"
    //     stroke="#d4e07d"
    //     strokeWidth={2}
    //     strokeLinecap="round"
    //   />
    // </svg>
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.653 14.03a.922.922 0 111.304-1.304l3.703 3.704 7.778-7.778a.922.922 0 111.304 1.304l-8.375 8.375a1 1 0 01-1.415 0l-4.3-4.3z"
        fill="#d4e07d"
        stroke="#d4e07d"
      />
      <path
        clipRule="evenodd"
        d="M14 1C6.82 1 1 6.82 1 14s5.82 13 13 13 13-5.82 13-13S21.18 1 14 1zM3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14z"
        fill="#d4e07d"
        fillRule="evenodd"
        stroke="#d4e07d"
      />
    </svg>
  );
}

export default done;
