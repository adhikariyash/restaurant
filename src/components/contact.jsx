import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    
    setMessageSent(true); // Show message sent notification

    // Clear form data
    setFormData({ name: '', email: '', message: '' });

    // Hide the message after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className="mt-10 h-screen flex  border-t-2 rounded-xl justify-center items-center bg-white">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-orange-50 relative">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Contact Us</h2>

        {/* Success message */}
        {messageSent && (
          <div className="absolute top-0 right-0 bg-green-500 text-white font-bold p-3 rounded-lg shadow-md mt-4 mr-4">
            Message Sent!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-orange-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-orange-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
          
            />
          </div>
          <div>
            <label className="block text-orange-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your message"
              rows="5"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
