// LoginForm.js

import React from 'react';
import './Login.css'; // Import your CSS file for styling

const LoginForm = () => {
  return (
    <div className='main-tag'>
    <div className="background-image-container">
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" id="username" name="username" placeholder='Username'/>
        <input type="password" id="password" name="password"  placeholder='Password'/>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default LoginForm;
