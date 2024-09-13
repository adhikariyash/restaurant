import React, { useContext } from 'react';
import { CartContext } from './cartProvider';
import { Link } from 'react-router-dom';

function Order() {
  const { cart, updateQuantity } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <div className="p-5">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>

      {/* Check if cart is empty */}
      {cart.length === 0 ? (
        <div className="text-center h-screen flex flex-col items-center justify-center border-4 rounded-xl py-4">
          <p className="text-xl font-bold">Nothing in Your cart. Cart is empty!!</p>
          <Link to="/" className="text-blue-500 hover:underline">Go back to shopping</Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map(product => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(product.id, -1)} 
                          className="bg-gray-300 p-1 rounded-l"
                        >
                          -
                        </button>
                        <span className="px-3">{product.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, +1)} 
                          className="bg-gray-300 p-1 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="4" className="px-6 py-3 text-right font-semibold">Total</td>
                  <td className="px-6 py-3">${calculateTotalPrice().toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">Total: ${calculateTotalPrice().toFixed(2)}</span>
            <Link to="/checkout">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
