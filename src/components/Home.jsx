import React, { useState } from 'react'
import Header from './Header'
import Category from './Category'
import Categoryitems from './CategoryItems' 
import Contact from './contact'

function Home({category, setcategory}) {
 
  return (
  <>
  
   <section id='home' className=' p-1'>
   
        <div >
          <Header/>
        </div>
        <div className='px-10'>
          <Category setcategory={setcategory} category={category}/>
        </div>
       <div className='flex justify-center items-center px-10'>
         <div className=''>
          <Categoryitems category={category}/>
        </div>
        </div>
        <div><Contact /></div>
    
   
        
         
   </section>
  </>
  )
}

export default Home
