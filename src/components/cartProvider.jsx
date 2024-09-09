import React, { createContext, useState, useContext } from 'react';

// Create contexts
export const CartContext = createContext();
export const CheckoutContext = createContext();

// Cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        // Product already in cart, don't add it again
        return prevCart;
      } else {
        // Product not in cart, add it with details
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, amount) => {
    setCart(prevCart => {
      return prevCart.map(item => 
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      );
    });
  };

  const handleCheckout = (data) => {
    setCheckoutData(data);
  };

  return (
    <CartContext.Provider value={{ cart, setCart: addToCart, updateQuantity }}>
      <CheckoutContext.Provider value={{ checkoutData, handleCheckout }}>
        {children}
      </CheckoutContext.Provider>
    </CartContext.Provider>
  );
};

// Custom hooks to use contexts
export const useCart = () => useContext(CartContext);
export const useCheckout = () => useContext(CheckoutContext);
