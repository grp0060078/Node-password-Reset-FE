// ForgetPasswordComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const ForgetPasswordComponent = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/reset-password', { email });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Forget Password</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgetPassword}>Submit</button>
    </div>
  );
};

export default ForgetPasswordComponent;
