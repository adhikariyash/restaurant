import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data'; 
import { CartContext } from './cartProvider';

function ProductDetails() {
  const { id } = useParams(); 
  const productId = parseInt(id);
  const product = products.find(item => item.id === productId);
  const { cart, setCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className='flex p-5 flex-col items-center mt-0 h-screen justify-center'>
      <div className='flex flex-col justify-center border-2 p-5 items-center'>
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
        <div className='border-t-4 font-bold flex w-full justify-between px-5'>
          <p className='text-lg mb-4 font-bold'>Category: {product.category}</p>
          <p className='text-lg mb-4'>Price: ${product.price}</p>
        </div>
        <div className='flex flex-col justify-start text-start items-center w-full px-5'>
          <p className='font-medium'>{product.description}</p> 
          <div className='text-start w-full mt-2'>
            <p className='font-bold'>Key Ingredients:</p>
            <ul className='flex sm:gap-6 text-xs gap-4 mt-2 mb-3 w-full items-start justify-start text-start font-bold'>
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='text-end w-full flex gap-4 justify-end'>
          <Link className='bg-orange-400 p-3 rounded-xl font-bold shadow-sm shadow-black' to={`/orders/${product.id}`}>View Cart</Link>
          <button 
            className='bg-orange-400 p-3 rounded-xl font-bold shadow-sm shadow-black' 
            onClick={() => setCart({
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price
            })}
          >
            Order Now!
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
