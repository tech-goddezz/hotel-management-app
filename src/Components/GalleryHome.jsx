import React from 'react';
import { hotelRooms } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';


import { 
    FaMapMarkerAlt, 
    FaHourglassHalf,
    FaBaby,
    FaClock,
} from 'react-icons/fa';

import { GiClothes, GiForkKnifeSpoon } from 'react-icons/gi';






const GalleryHome = () => {
    return (
        <>

            <div className='bg-[#ffffff] '>
                <h1 className='text-black text-4xl text-center pt-10 pb-5'>Most Popular Rooms</h1>




                <div className=' lg:flex max-w[1520px] m-auto pt-4 pb-20 px-3  '
                >
                    <Splide options={{ perPage: 3, gap: '2.5rem', drag: 'free', arrows: false }}
                    >
                        {

                            hotelRooms.map((items) => {
                                return (
                                    <SplideSlide key={items.id}>
                                        <div className="rounded-3xl  relative  m-">

                                            {/* inset-0 bg-[#ebcf32] opacity-30 */}
                <div className='absolute w-full bg-black/30 h-full                  '>
                    <Link to='/bookings'>
                    <p className='px-2 text-[#ebcf32] pt-4 text-2xl '> {items.price} <span className='text-white -ml-[8px] text-sm'>/Pernight</span> </p>
                    </Link>

                        
                    <p className='px-2 lg:pt-[24rem] sm:pt-[21rem] md:pt-[22rem] text-[#f3f0f0]  text-center text-4xl'>{items.title} </p>


                    <p className='px-2 pt-[0.1rem] text-white text-center text-xl'> {items.desc} </p>

                    <Link to='/bookings'>
                    <p className='px-2 pt-[20px] text-center text-black text-xl'> <button className='bg-[#a8931b] hover:bg-[#ebcf32] border-none border-white pt-1 pb-2 px-10 rounded-[30px] '> {items.more}   </button>  </p>
                    </Link>





                </div>

                <img
                    className='h-[500px] sm:h-[590px]  w-full object-cover rounded-[6px] cursor-pointer hover:scale-105 ease-out duration-300'
                    src={items.img}
                    alt={items.title} />

            </div>


                                    </SplideSlide>
                                )
                            })



                        }

                    </Splide>

                </div>


            </div>


            {/* ------------------------------------ */}
            <div className='font-georgia'>
                <h4 className="text-[#ceb00a] text-center pt-10">WHAT WE DO</h4>
                <h1 className='text-black text-4xl text-center '>Discover Our Services</h1>

                <div className="justify-center text-[#696969] bg-white items-center font-georgia mtop flex flex-col md:flex-row p-8 pt-[20px]  ">


                    <div className=" w-1/2 md:w-1/2 md:p-8 justify-center">
                        <Link to='/bookings'  >
                        <h4 className="text-[#ceb00a] pl-[130px] hover:text-[gold] hover:scale-105  "><FaMapMarkerAlt size={30} /></h4>
                        <h1 className="text-2xl  pl-20"> Travel Plan </h1>
                        </Link>
                        <p className="mt-4 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.
                            </p>



                        </div>

                    {/* ---------------------- */}
                    <div className=" w-1/2 md:w-1/2 md:p-8 justify-center">
                        <Link to='/bookings'  >
                        <h4 className="text-[#ceb00a] pl-[130px] hover:text-[gold] hover:scale-105 "><GiForkKnifeSpoon size={30} /></h4>
                        <h1 className="text-2xl font-thin pl-20"> Catering Services
                        </h1>
                        </Link>
                        <p className="mt-4 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.
                            </p>



                        </div>

                    {/* --------------------------------- */}
                    <div className=" w-1/2 md:w-1/2 md:p-8 justify-center">
                        <Link to='/bookings'  >
                        <h4 className="pl-[130px] text-[#ceb00a] hover:text-[gold] hover:scale-105 "><FaBaby size={30} /></h4>
                        <h1 className="pl-20 text-2xl font-thin"> Babysitting</h1>
                        </Link>
                        <p className="mt-4 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.
                            </p>

                    </div>
                </div>

    {/* --------------- */}

<div className="justify-center text-[#696969] bg-white items-center font-georgia mtop flex flex-col md:flex-row px-8 -mt-20 ">


<div className=" w-1/2 md:w-1/2 md:p-8 justify-center">
    <Link to='/bookings'  >
    <h4 className="text-[#ceb00a] pl-[110px] hover:text-[gold] hover:scale-105 "><GiClothes size={30} /></h4>
    <h1 className="text-2xl font-thin pl-20"> Laundry </h1>
    </Link>
    <p className="mt-4 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.</p>



    </div>

{/* ---------------------- */}
<div className=" w-1/2 md:w-1/2 md:p-8 justify-center">
    <Link to='/bookings'  >
    <h4 className="text-[#ceb00a] pl-[130px] hover:text-[gold] hover:scale-105 "><FaClock size={30} /></h4>
    <h1 className="text-2xl font-thin pl-20"> Hire Driver</h1>
    </Link>
    <p className="mt-4 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.
        </p>


</div>

{/* --------------------------------- */}
<div className=" w-1/2 md:w-1/2 md:p-8 justify-center ">
    <Link to='/bookings'  >
    <h4 className="text-[#ceb00a] pl-[130px] hover:text-[gold] hover:scale-105 "><FaHourglassHalf size={30} /></h4>
    <h1 className="text-2xl font-thin pl-20"> <Link to='/bookings'>Bar & Drink</Link> </h1>
    </Link>
    <p className="mt-4 ">Paradise.com is a leading online accommodation site. We're passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.</p>



    </div>
</div>



{/* ---------------------- */}





            </div>
        </>
    )
}

export default GalleryHome;   