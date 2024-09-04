import React from 'react'
import products from '../data'

function Categoryitems({category}) {
  return (
    <div className='grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-y-4 mt-10'>
      {products
        .filter(items => category === items.category || category === "All")
        .map((items, index) => (
          <div className="font-bold border-b-2 flex flex-col justify-center border-2 p-4 items-center lg:w-52 w-40 text-center lg:h-52 h-40 " key={index}>
            <img className=' w-24 h-24 md:w-36 mb-3 rounded-full shadow-xl border-4 border-blue-800 hover:rounded-none  ease-in-out duration-300 ' src={items.image} alt={items.name} />
            <li className='list-none text-sm '>{items.name}</li>
          </div>
      ))}
    </div>
  )
}

export default Categoryitems
