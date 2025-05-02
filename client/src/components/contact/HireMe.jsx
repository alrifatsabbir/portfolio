import React, { useEffect, useState } from 'react';
import { sendHireMeRequest } from '../../utils/api';

function HireMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    description: '',
    priceRange: '',
  });

  const [message, setMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendHireMeRequest(formData);
      setMessage(response.message);
      setFormData({ name: '', email: '', project: '', description: '', priceRange: '' }); // Reset form
      setTimeout(()=>{
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
    } catch (error){
      console.log('Error sending hire email:',error );
      setMessage('An error occurred. Please try again.');
      setIsMessageVisible(true);
      setTimeout(()=>{
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
    }
  };

  useEffect(()=>{
    if (isMessageVisible){
      const timer = setTimeout(()=>{
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
      return()=> clearTimeout(timer);
    }
  }, [isMessageVisible]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Hire Me</h2>
        {isMessageVisible && (
          <div
            className="fixed top-7 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-md shadow-lg z-50 flex items-center justify-center"
            style={{ minWidth: '250px', zIndex: 1000 }}
          >
            <span className="mr-2">{message}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">
              Project
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="project"
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priceRange">
              Price Range
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="priceRange"
              type="text"
              name="priceRange"
              value={formData.priceRange}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default HireMe;