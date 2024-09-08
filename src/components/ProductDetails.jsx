import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data'; 

function ProductDetails() {
  const { id } = useParams(); 
  const productId = parseInt(id);
  const product = products.find(item => item.id === productId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className='flex flex-col items-center h-screen justify-center'>
      <div>
        <title>{product.name} - Product Details</title>

        <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
        <img 
          src={product.image} 
          alt={product.name} 
          className='w-60 h-60 rounded-full shadow-lg mb-6'
        />
    
        <p className='text-lg mb-4'>Category: {product.category}</p>
        <p>
          {product.description }
        </p>
        <p className='text-lg mb-4'>Price: ${product.price}</p>
      <div>
        <ul>
          <li>
            {product.ingredients[0]}
          </li>
          <li>
            {product.ingredients[1]}
          </li>
          <li>
            {product.ingredients[2]}
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default ProductDetails;
