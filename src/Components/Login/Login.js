import React from 'react';
import './Login.css';

const LoginForm = () => {
  return (
    <div className='main-tag'>
    <div className="login-container">
      <form className="login-form">
        <h2 className='login-h2-1'>Login</h2>
        <input type="text" id="username" name="username" placeholder='Email'/>
        <input type="password" id="password" name="password"  placeholder='Password'/>
        <button type="submit">Login &rarr;</button>
      </form>
      <a href="/" >Forgotten your password?</a>
      <p>Do not have an TourneyHub ID?<a href="/signup" >Create yours now.</a></p>
    </div>
    </div>
  );
}

export default LoginForm;
