import React, { useState } from 'react'
import Header from './Header'
import Category from './Category'
import Categoryitems from './CategoryItems' 

function Home({category, setcategory}) {
 
  return (
  <>
  
   <section id='home' className=' p-1'>
        <div>
          <Header/>
        </div>
        <div className='px-10'>
          <Category setcategory={setcategory} category={category}/>
        </div>
       <div className='flex  gap-10 justify-center items-center'> <div className=' gap-x-5'>
          <Categoryitems category={category}/>
        </div>
        </div>
    
      
        
         
   </section>
  </>
  )
}

export default Home
