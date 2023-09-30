import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Featured = () => {
    const sliders = [
        {
            url: 'https://c4.wallpaperflare.com/wallpaper/283/899/779/house-style-house-pool-wallpaper-preview.jpg',
        },
        {
            url: 'https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg',
        },
        {
            url: 'https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // left arrow slider
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    };

    // right arrow slider
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    };

    // bullets under slider
    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const room = <Link to='/bookings'></Link>
   

    return (
        <div className='font-georgia '>
       
        <div
            className=" max-w-[1520px] top-[10%] h-[700px] w-full py-4 px-4 relative group"
            style={{
                background: `url(${sliders[currentIndex].url})`,
                backgroundSize: 'cover', // Set background size to cover
                backgroundPosition: 'center', // Center the background image
            }}
        >
            {/* arrow slider */}
            {/* left arrow */}
            <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#ebcf32] text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlider} />
        </div>

            {/* right arrow */}
            <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#ebcf32] text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlider} />
            </div>

            


<div className=' left-35 top-[35%] font-geogio absolute  text-white '>
<h1 className="text-[100px] pl-[180px] mt-8">Welcome to Paradise</h1>

<h1 className="-mt-[20px] pl-[500px] text-[30px] ">Luxury Hotel and Suite</h1>
<button className='border-[#ebcf32] hover:bg-[#ebcf32] ml-[590px]'>Discover Now</button>
</div>

                
{/* --------------- */}
{/* bullet slider */}
<div className="flex bottom-8 justify-center  pt-[500px] ">
                {sliders.map((sliderItems, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => moveToNextSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>

            {/* end */}

{/* top-[25%] bg-opacity-70 */}
<div className="bg-black/60 top-[80%] absolute   right-2 px-9 -pt-1  rounded-[10px] text-white
    lg:w-[1200px] lg:h-[230px] 
    md:right-[100px] md:w-[400] md:h-[350px] 
    sm:w-50  sm:h-[230px]  
    ">
                 <div className="container">
                     

                    <div className='container'>
                     <form className="mt-8">
                        
                         
                         {/* ----------- */}
                         <div className="flex  space-x-4 mt-4 ">
                             <label className="w-1/2 flex justify-center  items-center rounded  text-xl bg-black text-white">Check In/Out</label>
                             <label className="w-1/2 rounded flex justify-center items-center text-xl bg-black text-white">Guests</label>
                             <label className="w-1/2  rounded flex justify-center items-center text-xl bg-black text-white">Pets</label>
                             
                         </div>
                         {/* -------------------------- */}
                         <div className="flex space-x-4 mt-4">
                         <input
                                 type="date"
                                 placeholder="Check In"
                                 className="w-1/2 px-4 rounded bg-[#1b1a1a] text-white"
                             />
                             <input
                                 type="number"
                                 placeholder="Adult(s)(18+)"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                             <input
                                 type="number"
                                 placeholder="Yes"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                         </div>
                         {/* ------------------------- */}
                         <div className="flex space-x-4 mt-4">
                         <input
                                 type="date"
                                 placeholder="Check Out"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                             <input
                                 type="number"
                                 placeholder="Children(0-17)"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                             <input
                                 type="number"
                                 placeholder="No"
                                 className="w-1/2 px-4  rounded bg-gray-800 text-white"
                             />
                         </div>
                         {/* ------------------------------ */}

                            
                         <button
  onClick={() => {room}}
  className="block w-full bg-[#ebcf32] border-[gold] text-black py-1 mt-4 rounded hover:text-white hover:scale-105"
>
  Check Room Availability
</button>
                     </form>
                     </div>
                     
                </div>
                </div>
            {/* ----------------- */}
        </div>
        </div>
    );
};

export default Featured;






