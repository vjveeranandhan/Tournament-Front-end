import React, {useState} from 'react';
import './Login.css';
import ApiService from '../apiService/apiService';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    console.log("Change in input data", e.target.value)
    const { name, value } = e.target;
    setFormData(prevState => ({
    ...prevState,
    [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.register('/api/user-login/', formData);
      setFormData({
        username: '',
        password: '',
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.user_id);
      window.location.reload();
      console.log('Successful API response:', response.data);
      window.location.href = '/';

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='main-tag'>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-h2-1'>Login</h2>
        <input type="text" id="username" name="username" placeholder='Email' onChange={handleChange} value={formData.username} required/>
        <input type="password" id="password" name="password"  placeholder='Password' onChange={handleChange} value={formData.password} required/>
        <button type="submit">Login &rarr;</button>
      </form>
      <a href="/" >Forgotten your password?</a>
      <p>Do not have an TourneyHub ID?<a href="/signup" >Create yours now.</a></p>
    </div>
    </div>
  );
}

export default LoginForm;
