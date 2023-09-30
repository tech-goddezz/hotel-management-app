import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import HeadTitle from './HeadTitle';

const Bookings = () => {
  return (
    <>
      <Navbar />
      <HeadTitle />

      <div className="justify-center bg-white items-center font-georgia mtop flex flex-col md:flex-row p-8 pt-5 pb-[50px] ">

        {/* ------------------------------ */}
        <div className="md:w-1/1 relative md:p-8">
          <img className=' mx-auto  my-4 w-full h-full' src="https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg" alt="picture" />
          
        </div>
        {/* ------------------------------------ */}




        <div className="w-1/1 md:w-1/1 md:p-8 justify-center">
          <h1 className="text-3xl font-thin">Room View Sea
            <h1 className="text-[gold]">$400 <span className='text-[15px] text-[#c0bfbf] '>/Day</span></h1>
          </h1>

          <div className="flex items-center text-[17px] mt-7">
            <div className=''>
              <p className=' text-gray-400'>Size:</p>
              <p className=' '>30 ft</p>
              <p className='pt-5 text-gray-400'>Bed:</p>
              <p className=''>Kings Beds</p>
            </div>

            <div className='px-20 '>
              <p className=' text-gray-400'>Capacity:</p>
              <p className=''>Max person 5</p>
              <p className='pt-5 text-gray-400'>Services:</p>
              <p className=''>Wifi, television...</p>
            </div>
          </div>

          <p className='pt-10 text-[gold] text-xl'>View Details</p>


        </div>

        {/* ---------------------------------------------- */}

        <div className=" w-1/2 md:w-1/1 md:p-8 justify-center">

          <h1 className='text-xl mt-10 -mb-5'>Date</h1>
          <div className="flex items-center text-[17px] mt-7 -mb-7">

            <div className=''>
              <label htmlFor="">Check In</label>
              <input
                type="date"
                name="date"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Check In"
                className="w-full p-2 border border-gray-300 text-black/10  mb-4"
              />

              {/* <label htmlFor="">Guests</label>
            <input
                type="text"
                name="text"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Adults"
                className="w-full p-2 border border-gray-300 text-black/10 rounded-lg mb-4"
              /> */}
            </div>

            <div className='  '>
              <label htmlFor="">Check Out</label>
              <input
                type="date"
                name="date"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Check In"
                className="w-full text-black/10 p-2 border border-gray-300  mb-4"
              /></div>

            {/* <label htmlFor="">Children</label>
              <input
                type="text"
                name="text"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Children"
                className="w-full p-2 border border-gray-300 text-black/10 rounded-lg mb-4"
              /> */}


          </div>
          <h1 className='text-xl mt-10 -mb-5'>Guests</h1>

          <div className="flex items-center text-[17px] mt-7">
            

<div className=''>
<label htmlFor="">Adults</label>
<input
    type="number"
    name="number"
    // value={email}
    // onChange={(e) => setEmail(e.target.value)}
    placeholder="No of Adults"
    className="w-full p-2 border border-gray-300 text-black/70 rounded-sm mb-4"
  />

  
</div>

<div className=' pl-10 ml-10 '>
<label htmlFor="">Children</label>
  <input
    type="number"
    name="number"
    // value={email}
    // onChange={(e) => setEmail(e.target.value)}
    placeholder="Number of kids"
    className="w-full text-black/10 p-2 border border-gray-300 rounded-sm mb-4"
  />
  </div>




</div>

<h1 className='text-xl '>Max Price: $0 - $3000</h1>
<button className='bg-[gold] w-full hover:text-white hover:scale-105 mt-10 border-[gold] rounded-[100px] '> Book Room</button>

          {/* -------------- */}


        </div>




      </div>






    </>
  )
}

export default Bookings