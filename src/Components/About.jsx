import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';


const About = () => {

  
  const room = <Link to='/bookings'></Link>
  return (
    <>
  

    <div className="justify-center text-black bg-white items-center font-georgia mtop flex flex-col md:flex-row p-8 pt-[150px] pb-[50px] ">
      <div className=" w-1/2 md:w-1/2 md:p-8 justify-center">
        <h4 className="text-[#ceb00a]">About Us</h4>
        <h1 className="text-4xl font-thin"> Intercontinental LA
         <h1 className=""><span className='font-bold'>Paradise</span> Hotel </h1>
        </h1>
        
        <p className="mt-4 mb-5 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.
        So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we've got you covered.
So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we've got you covered.</p>

      

<Link to="/about" className="mb-10   text-black py-2 pr-2  border-0 rounded-none hover:bg-[#af9619]">
  Explore More <FontAwesomeIcon icon="long-arrow-alt-right" className="ml-1" />
</Link>


        <hr className="border-t-2   border-[#ceb00a] w-[100px] h-10  " />
      </div>
      
      <div className="md:w-1/2 relative md:p-8">
        <Link to='/about'>
        <img className=' mx-auto my-4 w-full' src="https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg" alt="picture" />
        </Link>
        <div className="control-btn absolute left-1/2 -bottom-8 transform -translate-x-1/2">
        


        </div>
        
       
      </div>
    </div>
</>


  )
}

export default About;          