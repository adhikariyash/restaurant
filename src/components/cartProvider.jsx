import React, { createContext, useState, useContext, useEffect } from 'react';

// Create contexts
export const CartContext = createContext();
export const CheckoutContext = createContext();
export const checkoutStatusContext = createContext();

// Cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);
  const [checkoutStatus, setcheckoutStatus] = useState(false);

  useEffect(() => {
    if (checkoutStatus) {
      // Clear the cart if checkout status is true
      setCart([]);
      // Reset checkoutStatus after clearing cart if needed
      setcheckoutStatus(false);
    }
  }, [checkoutStatus]); // Dependency array includes checkoutStatus

  useEffect(() => {
    console.log('Updated Cart:', cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        return prevCart;
      } else {
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
        <checkoutStatusContext.Provider value={{ checkoutStatus, setcheckoutStatus }}>
          {children}
        </checkoutStatusContext.Provider>
      </CheckoutContext.Provider>
    </CartContext.Provider>
  );
};

// Custom hooks to use contexts
export const useCart = () => useContext(CartContext);
export const useCheckout = () => useContext(CheckoutContext);
export const useCheckoutStatus = () => useContext(checkoutStatusContext);
