import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Menu from './Menu';
import Home from './Home';
import AppDownload from './AppDownload';
import Navbar from './Navbar';
import Contact from './contact';
import Order from './Order';
function RouterConfig() {
  const [category, setcategory] = useState("All") 
  return (
    <>
    
      <Router>
      <div className='mb-10'>
      <Navbar/>
      </div>
        <Routes>
          <Route path='/' element={<Home category={category} setcategory={setcategory} />}  />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/menu' element={<Menu category={category} setcategory={setcategory} />} />
          <Route path ='/contacts' element = {<Contact />}/>
          <Route path='/mobile-app' element={<AppDownload />} />
          <Route path ="/orders" element={<Order/>}/>
        </Routes>

       
      </Router>
    </>
  );
}

export default RouterConfig;
