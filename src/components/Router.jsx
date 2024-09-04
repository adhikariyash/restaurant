import React from 'react'
import Home from './Home'
import { useState } from 'react'
import Category from './Category'
import Categoryitems from './CategoryItems'
import Navbar from './Navbar'

function Router() {
    
 const [category, setcategory] = useState('All')
  return (
    <>
      <div className='mb-9'>
        <Navbar/>
      </div>
 <div>
        <Home />
      </div>
      <div className='px-5'>
     
      <div >
      <Category category={category} setcategory={setcategory}/>
    
      
        
          <Categoryitems category={category}/>
      </div>
    
      </div>
    </>
  )
}

export default Router
