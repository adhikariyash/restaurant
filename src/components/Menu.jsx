import React from 'react'
import Category from './Category'
import Categoryitems from './CategoryItems'

function Menu({category, setcategory}) {
  return (
   <>
    <div>
        <Category />
    </div>
    <div>
        <Categoryitems category={category}/>
    </div>
   
   </>
  )
}

export default Menu
