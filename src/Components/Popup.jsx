import React from 'react';

import { Link } from "react-router-dom";


const Popup = ({ isOpen, children }) => {

  if (!isOpen) return null;

  return (
    <>



    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-[white] p-10 rounded shadow-lg ">

        {children}

        <button className="mt-4 bg-[gold] border-[gold] hover:text-white text-black hover:scale-105 font-semibold py-2 px-4 ml-4  rounded-[50px] ">
          <Link to='/' >
          Close
          </Link>
        </button>

        

      </div>
    </div>
    </>
  );
};

export default Popup;
