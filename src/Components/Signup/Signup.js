import React, {useState } from 'react';
import './Signup.css'
import ApiService from '../apiService/apiService';

const Signup = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        date_of_birth: '',
        phone: '',
        password: '',
        confirm_password: ''
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
          const response = await ApiService.register('/api/create-user/', formData);
          console.log('Successful API response:', response.data);
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            date_of_birth: '',
            phone: '',
            password: '',
            confirm_password: ''
          });
          window.location.href = '/login';
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return(
        <div className="signup-container">
            <form className="signup-form"  onSubmit={handleSubmit}>
                <h2 className='signup-h2-1'>Create your TurnyHub Account</h2>
                <input type="text" id="first_name" name="first_name" placeholder='First name' onChange={handleChange} value={formData.first_name} required/>
                <input type="text" id="last_name" name="last_name" placeholder='Last name' onChange={handleChange} value={formData.last_name} required/>
                <input type="text" id="email" name="email" placeholder='Email' onChange={handleChange} value={formData.email} required/>
                <input type="date" id="date_of_birth" name="date_of_birth" placeholder='Date of birth' onChange={handleChange} value={formData.date_of_birth} required/>
                <input type="text" id="phone" name="phone" placeholder='Phone' onChange={handleChange} value={formData.phone} required/>
                <input type="password" id="password" name="password"  placeholder='Password' onChange={handleChange} value={formData.password} required/>
                <input type="password" id="confirm_password" name="confirm_password"  placeholder='Confirm Password' value={formData.confirm_password} onChange={handleChange} />
                <button type="submit">Signup &rarr;</button>
            </form>
            <a href="/" >Forgotten your password?</a>
            <p>Have account?<a href="/login" >Login.</a></p>
        </div>
    );
};
export default Signup