import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogData from './BlogData';


const AllBlog = () => {
  const [items, setItems] = useState(BlogData);
  
  return (
    <>
      <section className="bg-top">
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlog;
   