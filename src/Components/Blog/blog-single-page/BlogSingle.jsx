import React, { useState, useEffect } from "react";
import BlogData from "../BlogData";
import EmptyFile from "./EmptyFile";
import HeadTitle from "../../HeadTitle";
import { useParams } from "react-router-dom";
import { RxDotFilled } from 'react-icons/rx';
import UserNavbar from "../../UserNavbar";

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = BlogData.find((item) => item.id === parseInt(id));
    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [id]);

  if (!item) {
    // Handle the case where the item is not found
    return (
      <>
        <HeadTitle />
        <EmptyFile />
      </>
    );
  }

  return (
    <>
      <UserNavbar />

      <HeadTitle />
      <div className="font-georgia mtop flex flex-col md:flex-row p-8 pt-[0px]">
        <div className="md:w-1/2 relative md:p-8 mt-20 w-150">
          <img src={item.cover} alt="picture" />
          <span>{item.date}</span>
          <label>{item.catgeory}</label>
          <div className="control-btn absolute left-1/2 -bottom-8 transform -translate-x-1/2"></div>
        </div>

        <div className="w-1/2 md:w-1/2 md:p-8 ml-auto mt-20">
          <h1 className="text-4xl font-thin">
            Our <span className="font-bold text-[#ebcf32]">Categories</span>
          </h1>
          <hr />
          <ul className="mt-3">
            {BlogData.map((item) => {
              return (
                <li className="flex items-center" key={item.id}>
                  <RxDotFilled className="mr-2 py-4" />
                  {item.catgeory}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <section className="top">
        <div className="pl-10">
          <h1 className="pb-3 font-bold text-black/70 text-xl"> {item.title} </h1>
          <p>{item.desc}</p>
          <p>{item.desc}</p>
          <h2 className="pt-10 font-bold text-black/70 text-xl pb-3">Importance of Healthy Food</h2>
          <div className='para flex_space'>
            <p>{item.para}</p>
            <p>{item.para}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSingle;
