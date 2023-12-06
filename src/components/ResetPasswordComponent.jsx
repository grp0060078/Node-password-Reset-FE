
// ResetPasswordComponent.jsx


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import'../styles/App.css';

const ResetPasswordComponent = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/api/reset-password/${token}`, {
        email: 'user@example.com', // Provide the user's email
        newPassword: newPassword,
      });

      setErrorMessage('');
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.message);
      setSuccessMessage('');
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
<form>
      <h1>Reset Password</h1>
      <label>New Password:</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} name='password'
      />
     
      <button onClick={handleResetPassword}>Submit</button>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
</form>
    </div>
  );
};

export default ResetPasswordComponent;
