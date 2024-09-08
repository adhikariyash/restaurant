import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';

function Categoryitems({ category }) {
  return (
    <div className='flex justify-center  items-center'>
      <div className='grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-y-10 gap-x-5 mb-10 mt-10'>
      {products
        .filter(item => category === item.category || category === 'All')
        .map(item => (
          <Link to={`/products/${item.id}`}>
          <div 
            key={item.id} 
            className='font-bold border-b-2 flex flex-col justify-center border-2 items-center p-3  text-center h-48 rounded-xl w-40 lg:h-48 lg:w-48'
            
          >
            <img
              className='w-24 h-24 md:w-36 mb-3   rounded-full shadow-xl border-4 border-blue-800 hover:rounded-none ease-in-out   duration-300'
              src={item.image}
              alt={item.name}
            />
          <div className='flex justify-end items-end  w-full px-1'>
          <p className='text-sm font-bold '>
            {item.rating}⭐
          </p>
          </div>
          <div className='flex w-full justify-center items-center bg-orange-300 gap-4 rounded-lg p-2'>
          <li className='list-none text-sm '>{item.name}</li>
         
          </div>
           
              
            
            
          </div>
          </Link>
        ))}
    </div>
    </div>
  );
}

export default Categoryitems;
