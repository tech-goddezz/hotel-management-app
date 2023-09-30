import React from "react";
import { Link } from "react-router-dom";



import { BsChevronCompactRight } from 'react-icons/bs';


const BlogCard = ({ item: { id, cover, title, desc, para, catgeory, date } }) => {
  return (
    <>
     
      
      <div className="p-4 pt-16 font-georgia bg-white shadow-md rounded-lg transition duration-500 ease-in-out transform hover:bg-[#ebcf32]  hover:text-white hover:scale-105">
        <Link to={`/blogsingle/${id}`}>

        <div className="mb-4">
          <img src={cover} alt="Gallery Image" className="w-full h-full rounded-lg" />
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">{date}</span>
          <label className="bg-[#ebcf32] text-white text-xs py-1 px-3 rounded-md">{catgeory}</label>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 mt-2">{para}</p>
        </div>

        <Link to={`/blogsingle/${id}`} className="flex items-center mt-4 text-black font-semibold hover:text-[#ebcf32]">
          <span className="mr-1">READ MORE</span> <BsChevronCompactRight />
        </Link>

        </Link>

      </div>
    </>
  );
};

export default BlogCard;
