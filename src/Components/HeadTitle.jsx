import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeadTitle = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const headImage = {
    url: 'https://c4.wallpaperflare.com/wallpaper/283/899/779/house-style-house-pool-wallpaper-preview.jpg',
  };

  return (
    <>
      <section
        className="bg-cover bg-center bg-image-heading text-white h-30vh py-[50px] relative z-10"
        style={{
          backgroundImage: `url(${headImage.url})`,
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black opacity-60"
          style={{ zIndex: -1 }}
        ></div>
        <div className="container items-center text-center relative z-10">
          <h1 className="text-5xl capitalize">{location.pathname.split('/')[1]}</h1>
        </div>
      </section>
    </>
  );
};

export default HeadTitle;
