import React, { useState } from 'react';
import { useCheckout } from './cartProvider';

function Payment() {
  const { checkoutData } = useCheckout();

  const [paymentData, setPaymentData] = useState({
    accountNumber: '',
    accountHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });
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
    if (!paymentData.accountNumber) newErrors.accountNumber = 'Account Number is required';
    if (!paymentData.accountHolderName) newErrors.accountHolderName = 'Account Holder Name is required';
    if (!paymentData.cardNumber) newErrors.cardNumber = 'Card Number is required';
    if (!paymentData.cardExpiry) newErrors.cardExpiry = 'Card Expiry Date is required';
    if (!paymentData.cardCVV) newErrors.cardCVV = 'Card CVV is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Payment details submitted successfully');
      // Handle payment submission
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
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
      <form onSubmit={handleSubmit}>
        {/* Account Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="accountNumber">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={paymentData.accountNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.accountNumber && <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>}
        </div>

        {/* Account Holder Name */}
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

        {/* Card Number */}
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

        {/* Card Expiry */}
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

        {/* Card CVV */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
