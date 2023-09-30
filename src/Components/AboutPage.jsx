import React from 'react';
import HeadTitle from './HeadTitle';
import About from './About';
import UserNavbar from './UserNavbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';



const AboutPage = () => {
  return (
    
    <>
<UserNavbar />
  <HeadTitle />

  <section className="about top">
    <div className="container">
      <About />
    </div>
  </section>


  <div className="aboutCard mtop flex flex-col md:flex-row p-8 pt-[0px]">


  <div className="md:w-1/2 relative md:p-8">
        <img className=' mx-auto my-4 w-full' src="https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg" alt="picture" />
        <div className="control-btn absolute left-1/2 -bottom-8 transform -translate-x-1/2"></div>

      </div>


      <div className="w-1/2 md:w-1/2 md:p-8 font-georgia">
        <h1 className="text-4xl font-thin">
          Our <span className="font-bold text-[#ebcf32]">Features</span>
        </h1>
        <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
        <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>

        <Link to='/bookings'>
        <button className="mt-4 bg-[#ebcf32] border-[#ebcf32] hover:bg-white text-black py-2 px-4 rounded-lg  ">
          Explore More <FontAwesomeIcon icon="long-arrow-alt-right" className="ml-2" />
        </button>
        </Link>
      </div>
      
      

    </div>
  
</>


  )
}

export default AboutPage     