import React, { useState } from 'react';
import { useCheckout } from './cartProvider';
import { useCheckoutStatus } from './cartProvider';

function Payment() {
  const { checkoutData } = useCheckout();
  const { checkoutStatus, setcheckoutStatus } = useCheckoutStatus();

  const [paymentData, setPaymentData] = useState({
    accountHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });
  const [paymentMethod, setPaymentMethod] = useState(''); // Track selected payment method
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (paymentMethod === 'card') {
      if (!paymentData.accountHolderName) newErrors.accountHolderName = 'Account Holder Name is required';
      if (!paymentData.cardNumber) newErrors.cardNumber = 'Card Number is required';
      if (!paymentData.cardExpiry) newErrors.cardExpiry = 'Card Expiry Date is required';
      if (!paymentData.cardCVV) newErrors.cardCVV = 'Card CVV is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic
      // For example, update checkout status or send data to server
      setcheckoutStatus(true);
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>

      {/* Address Details */}
      {checkoutData && (
        <div className="p-4 mb-4 border border-gray-300 rounded-md bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Checkout Details</h2>
          <p><strong>Full Name:</strong> {checkoutData.fullName}</p>
          <p><strong>Phone Number:</strong> {checkoutData.phoneNumber}</p>
          <p><strong>Email:</strong> {checkoutData.email}</p>
          <p><strong>Country:</strong> {checkoutData.location.country}</p>
          <p><strong>State:</strong> {checkoutData.location.state}</p>
          <p><strong>House Number:</strong> {checkoutData.location.houseNo}</p>
        </div>
      )}

      {/* Payment Method Selection */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`p-4 border rounded-lg ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 grayscale'}`}
            onClick={() => setPaymentMethod('card')}
          >
            Pay with Card
          </button>
          <button
            type="button"
            className={`p-4 border rounded-lg ${paymentMethod === 'cod' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 grayscale'}`}
            onClick={() => setPaymentMethod('cod')}
          >
            Cash on Delivery
          </button>
        </div>
      </div>

      {/* Card Payment Form */}
      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="accountHolderName">
              Account Holder Name
            </label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={paymentData.accountHolderName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.accountHolderName && <p className="text-red-500 text-xs mt-1">{errors.accountHolderName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="cardExpiry">
              Card Expiry Date
            </label>
            <input
              type="text"
              id="cardExpiry"
              name="cardExpiry"
              value={paymentData.cardExpiry}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.cardExpiry && <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="cardCVV">
              Card CVV
            </label>
            <input
              type="text"
              id="cardCVV"
              name="cardCVV"
              value={paymentData.cardCVV}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.cardCVV && <p className="text-red-500 text-xs mt-1">{errors.cardCVV}</p>}
          </div>

          <button
            type="submit" // Changed from onClick to type="submit"
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2'>
            Place Order
          </button>
        </form>
      )}

      {paymentMethod === 'cod' && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">You selected Cash on Delivery.</h3>
          <p className="text-sm text-gray-600 mt-2">The payment will be collected at the time of delivery.</p>
          <button
            onClick={() => setcheckoutStatus(true)}
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2'>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Payment;
