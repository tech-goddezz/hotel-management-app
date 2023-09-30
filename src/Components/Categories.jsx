import React from 'react';
import { categories } from '../data/data';

import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='font-georgia max-w-[1520px] m-auto px-4 py-4'>

        <h4 className='text-[#ceb00a] text-center py-2'>HOTEL NEWS</h4>

        <h1 className='text-black text-4xl text-center'>Our Blog & Event</h1>

        <div className="grid grid-cols-2 md:grid-cols6 gap-5 py-5 px-2">

            {categories.map((items) => {

                return <div key={items.id} className="p-4  justify-center item-center hover:scale-105 duration-300  ">
                  
                  <Link to='/blog'>
                    <img 
                      src={items.image} 
                      alt={items.name}
                      className='rounded-md  ' 
                      />
                    </Link>

                    
                    <h1 className='pl-7 -mt-[100px] text-xl text-white'>{items.desc}</h1>
                    <h4 className='pl-7 text-white'>{items.time}</h4>
                    <Link to='/blog'>
                    <button className='ml-7 px-2 rounded-sm border-none bg-[#ceb00a] py-1 '>Discover</button>
                    </Link>
                </div>
                
            })}
        </div>

    </div>
  )
}

export default Categories