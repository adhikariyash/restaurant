import React from 'react'
import Category from './Category'
import Categoryitems from './CategoryItems'

function Menu({category, setcategory}) {
  return (
   <>
 <div className='flex justify-center items-center px-5 mt-32'>
 <div className='w-full'>
        <Category category={category} setcategory={setcategory} />
    </div>
 </div>
    <div>
        <Categoryitems category={category}/>
    </div>
   
   </>
  )
}

export default Menu
