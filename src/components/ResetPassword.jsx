import React, { useState } from 'react';
import "../styles/App.css"
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const initiateReset = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const resetPassword = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container">
      <h2>Password Reset</h2>
      <div className='div1'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <button onClick={initiateReset} className="button">Initiate Reset</button>
      </div>
      <div className='div1'>
        <label>Token:</label>
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      </div>
      <div className='div1'>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={resetPassword} className='reset'>Reset Password</button>
      </div>
      <div  className="message">{message}</div>
    </div>
  );
};

export default ResetPassword;
