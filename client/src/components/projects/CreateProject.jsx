import React, { useState } from 'react';
import axios from 'axios';

function CreateProject() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('https://rifat-the-dev.onrender.com/projects/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setImage(null);
    } catch (error) {
      console.error('Image upload error:', error);
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        setMessage(`Upload failed: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        // The request was made but no response was received
        setMessage('Upload failed: No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage('Upload failed: Could not connect to server');
      }
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h2>Upload Project Image</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default CreateProject;