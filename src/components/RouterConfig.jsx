import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Menu from './Menu';
import Home from './Home';
import AppDownload from './AppDownload';
import Navbar from './Navbar';
import Contact from './contact';
import Order from './Order';
import Checkout from './Checkout';
import Payment from './Payment';
import Footer from './Footer';

function RouterConfig() {
  const [category, setcategory] = useState("All") 
  return (
    <>
    
      <Router>
      <div className='lg:mb-16 mb-24 '>
      <Navbar/>
      </div>
        <Routes>
          <Route path='/' element={<Home category={category} setcategory={setcategory} />}  />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/menu' element={<Menu category={category} setcategory={setcategory} />} />
          <Route path ='/contacts' element = {<Contact />}/>
          <Route path='/mobile-app' element={<AppDownload />} />
          <Route path ="/orders" element={<Order/>}/>
          <Route path = "/checkout" element={<Checkout/>}/>

       
        <Route path ="/payment" element={<Payment/>}/>
        
        </Routes>
           
           <footer>
            <Footer />
           </footer>
       
      </Router>
    </>
  );
}

export default RouterConfig;
