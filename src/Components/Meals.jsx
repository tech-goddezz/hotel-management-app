import React, { useState } from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
import { mealData } from '../data/data';


import { Link } from 'react-router-dom';

const Meals = () => {

    // to be able to filter 
    const [foods, setFoods] = useState(mealData);

    const filterCat = (category) => {
        setFoods (
            mealData.filter ((item) => {
                return item.category === category;
             })
        )
    }


  return (
    
    <div className='max-w-[1520px] font-georgia bg-white m-auto px-4 py-10 '>
        <hr className="flex justify-center md:justify-center border-t-2  border-[#fff6ae] w-[1200px] ml-[65px] h-10 mt-20 " />

        {/* <h1 className='text-orange-500 font-bold text-2xl text-center py-6'> Our Meal </h1> */}

        <div className="flex felx-col lg:flex-row justify-center">

            <div className="flex justify-center md:justify-center pb-5 pt-20">


                <button 
                onClick={() => setFoods(mealData)}
                className='m-1 border-[#ebcf32] text-black bg-[#ebcf32]hover:bg-white hover:text-[#ebcf32] hover:[#ebcf32]'>All</button>

                <button 
                onClick={() => filterCat("deluxe")}
                className='m-1 border-[#ebcf32] text-black bg-[#ebcf32] hover:bg-white hover:text-[#ebcf32] hover:border-[#ebcf32]'>Deluxe</button>

                <button 
                onClick={() => filterCat("family")}
                className='m-1 border-[#ebcf32] text-black bg-[#ebcf32] hover:bg-white hover:text-[#ebcf32] hover:border-[#ebcf32]'>Family</button>

                <button 
                onClick={() => filterCat("suite")}
                className='m-1 border-[#ebcf32] text-black bg-[#ebcf32] hover:bg-white hover:text-[#ebcf32] hover:border-[#ebcf32]'>Suite</button>

                <button 
                onClick={() => filterCat("master")}
                className='m-1 border-[#ebcf32] text-black bg-[#ebcf32] hover:bg-white hover:text-[#ebcf32] hover:border-[#ebcf32]'>Master</button>


            </div>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4  gap-6 py-4">

            {
                foods.map((items) => (
                    
                    <div key={items.id} className="border-none hover:scale-105 font-bold duration-300">
                        <Link to='/gallery'>
                        <img 
                            src={items.image} 
                            alt={items.name}
                            className='w-full h-[400px] object-cover rounded-lg'
                        />
                        </Link>
                        

                        <div className='flex justify-between py-2 px-2'>

                            <p className="">{items.name}</p>
                            
                            <p className='bg-[#ebcf32] h-18 w-18 rounded-full -mt-10 text-black py-4 px-2 border-8 font-bold'>{items.price}</p>
                        </div>

                        <div className="pl-2 py-4 -mt-7">
                        <Link to='/gallery'>
                            <p className='flex items-center text-[#ebcf32]' >View More <ArrowSmRightIcon className='w-5 ml-2' /> </p>
                        </Link>
                        
                        </div>

                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Meals;    