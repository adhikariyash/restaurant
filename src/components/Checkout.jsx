import React, { useState, useEffect } from 'react';
import { useCheckout } from './cartProvider';
import { Link } from 'react-router-dom';

function Checkout() {
  const { handleCheckout } = useCheckout();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: {
      country: '',
      state: '',
      houseNo: '',
    },
  });
  const [errors, setErrors] = useState({});
  const [isAddressAdded, setIsAddressAdded] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // For popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.location) {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';

    const { country, state, houseNo } = formData.location;
    if (!country) newErrors['location.country'] = 'Country is required';
    if (!state) newErrors['location.state'] = 'State is required';
    if (!houseNo) newErrors['location.houseNo'] = 'House Number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsAddressAdded(true);
      setShowPopup(true); // Show popup
    }
  };

  // Hide the popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showPopup]);

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleAddAddress}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>

        {/* Location Sub-form */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Location</h3>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.location.country}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors['location.country'] && <p className="text-red-500 text-xs mt-1">{errors['location.country']}</p>}
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="state">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.location.state}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors['location.state'] && <p className="text-red-500 text-xs mt-1">{errors['location.state']}</p>}
          </div>

          {/* House Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="houseNo">
              House Number
            </label>
            <input
              type="text"
              id="houseNo"
              name="houseNo"
              value={formData.location.houseNo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors['location.houseNo'] && <p className="text-red-500 text-xs mt-1">{errors['location.houseNo']}</p>}
          </div>
        </div>

        {/* Address Box */}
        <div className="p-4 mt-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Address Details</h3>
          <p><strong>Country:</strong> {formData.location.country}</p>
          <p><strong>State:</strong> {formData.location.state}</p>
          <p><strong>House Number:</strong> {formData.location.houseNo}</p>
        </div>

        {/* Add Address Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Address
        </button>
      </form>

      {/* Proceed to Pay Button */}
      <Link to="/payment">
        <button
          disabled={!isAddressAdded}
          className={`w-full mt-4 text-white py-2 px-4 rounded-md ${
            isAddressAdded ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500' : 'bg-gray-400 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          Proceed to Pay
        </button>
      </Link>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-md transition-opacity duration-300 ease-in-out">
          Address added successfully!
        </div>
      )}
    </div>
  );
}

export default Checkout;
