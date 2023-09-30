import React from 'react';

import { Link } from "react-router-dom";

const AdminPopup = ({ isOpen, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 shadow-md ">
        <div className="bg-white p-10 rounded  ">

          {children}
          
          <button className="mt-4 bg-[gold] hover:scale-105 hover:text-white border-[gold] text-black font-semibold py-2 px-4 ml-4 rounded">
          <Link to='/adminhome' className='' >
          Close
          </Link>
          </button>

        </div>
      </div>
    );
  };
  
  export default AdminPopup;
            