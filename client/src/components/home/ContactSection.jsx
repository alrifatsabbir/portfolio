import React, { useState, useEffect } from 'react';
import { sendContactEmail } from '../../utils/api'; // Import your actual API function

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendContactEmail(formData); // Use your actual API call here
      setMessage(response.message);
      setIsMessageVisible(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error sending contact email:', error);
      setMessage('An error occurred. Please try again.');
      setIsMessageVisible(true);
      setTimeout(() => {
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
    }
  };

  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false);
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMessageVisible]);

  return (
    <section className="py-16 contact-sect">
      <div className="container mx-auto px-4">
        <h1 className="font-bold mb-8 text-center text-4xl tracking-widest">Contact Me</h1>

        {isMessageVisible && (
          <div
            className="fixed top-7 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-md shadow-lg z-50 flex items-center justify-center"
            style={{ minWidth: '250px', zIndex: 1000 }}
          >
            <span className="mr-2">{message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 contact-form-full">
          <div className="space-y-8 left-contact">
            <div className="p-6 rounded-lg shadow-md contact-pt1">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <p className="contact-details-p">Email : alrifatsabbir@gmail.com || alrifatsabbir@yahoo.com</p>
              <p className="contact-details-p">Phone: +880-1688-525596</p>
              <address className='contact-details-p'>Address: Pallabi, Mirpur-12, Dhaka-1216</address>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden contact-pt2">
              <h3 className="text-xl font-semibold mb-4 p-4">Find Me</h3>
              <div className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.149248731627!2d90.4109223!3d23.727826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b08835599d%3A0x5b299515e6997188!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699443361988!5m2!1sen!2sbd"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-md contact-pt3">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="mb-4">I would love to hear from you! Please fill out the form below:</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-y"
                  id="message"
                  name="message"
                  placeholder='Your Message will be here...'
                  value={formData.message}
                  onChange={handleChange}
                  required/>
              </div>
              <button className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-sect-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
