import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data'; 
import { CartContext } from './cartProvider';

function ProductDetails() {
  const [orderPopup, setOrderPopup] = useState(false);
  const { id } = useParams(); 
  const productId = parseInt(id);
  const product = products.find(item => item.id === productId);
  const { cart, setCart } = useContext(CartContext);
  
  console.log(cart);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleOrder = () => {
    setCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });

    setOrderPopup(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setOrderPopup(false);
    }, 2000);
  };

  return (
<>
<section className='p-10' >
      <div className='flex p-5 flex-col items-center justify-center'>
      <div className='flex flex-col justify-center rounded-xl border-2 p-5 items-center'>
        <div className='flex justify-center rounded shadow-lg items-center border-b-2 border-black mb-4 bg-orange-300 w-full px-4 p-1'>
          <h1 className='text-3xl text-center font-bold'>{product.name}</h1>
        </div>
        <div className='border-4 p-5 rounded-xl border-black shadow-lg shadow-black mb-4'>
          <img 
            src={product.image} 
            alt={product.name} 
            className='w-60 h-60 rounded-full shadow-lg mb-6'
          />
        </div>
        <div className='border-t-4 mt-5 font-bold flex w-full justify-between px-5'>
          <p className='text-lg mb-4 font-bold'>Category: {product.category}</p>
          <p className='text-lg mb-4'>Price: ${product.price}</p>
        </div>
        <div className='flex flex-col justify-start text-start items-center w-full px-5'>
          <p className='font-medium mt-5'>{product.description}</p> 
          <div className='text-start w-full mt-7'>
            <p className='font-bold'>Key Ingredients:</p>
            <ul className='flex sm:gap-6 text-sm mt-2 gap-4 mb-3 w-full items-start justify-start text-start font-bold'>
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='text-end w-full mt-5 flex gap-4 justify-end'>
          <button 
            className='bg-orange-400 p-3 rounded-xl font-bold shadow-sm shadow-black' 
            onClick={handleOrder}
          >
            Order Now!
          </button>
          <div className={orderPopup ? "flex border-2 font-bold bg-black text-white p-10 text-xl rounded-xl absolute bottom-28 shadow-lg gap-3  flex-col justify-center items-center border-green-500" : "hidden"}>
            Your order has been placed!
            <Link className='bg-orange-400 p-2  rounded-xl font-bold shadow-sm shadow-black' to="/orders">View Cart</Link>
          </div>
        </div>
      </div>
      </div>
    </section>
</>
  );
}

export default ProductDetails;
