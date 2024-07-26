import React, {useEffect, useState} from 'react';
import './Profile.css'
import ApiService from '../apiService/apiService';
import Popup from '../PopUp/Popup';

const Profile = () => {
    const [userdata, setUserData] = useState([]);
    const [editstatus, setEditstatus] = useState(true)
    const [errortext, setErrortext] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userdata,
            [name]: value
        });
    };

    const calculateAge = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    useEffect(() => {
        console.log("Inside use effect")
        const token = localStorage.getItem('token');
        const fetchData = async () => {
            try {
                const response = await ApiService.fetch_data('/api/get-user/', token);
                console.log('Successful API response:', response);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response && error.response.data && error.response.data.message) {
                    setErrortext(error.response.data.message);
                  } else {
                    setErrortext('Something went wrong. Please try again later.');
                  }
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Inside submit")
        try {
            console.log(userdata.date_of_birth)
            const age = calculateAge(userdata.date_of_birth);
            console.log(age,"age")
            if (age < 16) {
                setErrortext("Your age should be greater than 16!");
                return; 
            }
            const updatedUserData = {
                ...userdata,
                age: age
            };
            console.log("userdata ", userdata)
            const token = localStorage.getItem('token');
            const response = await ApiService.updateUserData('/api/update-user/', updatedUserData, token);
            setErrortext(response.data.message);
            setTimeout(() => {
                window.location.href = '/profile';
              }, 2000);
            console.log('Successful update:', response);
        } catch (error) {
            console.error('Error updating data:', error.response.data.message);
            if (error.response && error.response.data && error.response.data.message) {
                setErrortext(error.response.data.message);
              } else {
                setErrortext('Something went wrong. Please try again later.');
              }
        }
    };

    const handlePopupClose = () => {
        setErrortext('');
      };

    return(
        <div className='profile-main-container'>
            <div className='header-container'>
                <h1 style={{color:'black'}}>Profile</h1>
            </div>
             <div key={userdata.id}  className='profile-details-container'>
                {editstatus ? (
                <div className="profile-details">
                    <h2 style={{color:'white'}}>{userdata.first_name} {userdata.last_name}</h2>
                    <div style={{margin: '40px 0 0 0'}}>
                        <p><strong style={{margin:'0 82px 0 20px'}}>Email:</strong><strong>{userdata.email}</strong></p>
                        <p><strong style={{margin:'0 98px 0 20px'}}>Age:</strong><strong>{userdata.age}</strong></p>
                        <p><strong style={{margin:'0 16px 0 20px'}}>Date of Birth:</strong><strong> {userdata.date_of_birth}</strong></p>
                        <p><strong style={{margin:'0 72px 0 20px'}}>Phone:</strong><strong> {userdata.phone}</strong></p>
                    </div>
                    <div>
                    <button onClick={()=>setEditstatus(false)}>Edit</button>
                    </div>
                </div>
                ) : (
                    <div className='update-user-component'>
                            <form onSubmit={handleSubmit} className='user-update-form'>
                            <h1 style={{margin:'0 0 20px 0'}}>Update Profile</h1>
                            <input type="text" id="first_name"  name="first_name" placeholder='First name' value={userdata.first_name} onChange={handleChange} required />
                            <input type="text" id="last_name" name="last_name" placeholder='Last name' onChange={handleChange} value={userdata.last_name} required />
                            <input type="text" id="email" name="email" placeholder='Email' onChange={handleChange} value={userdata.email} required />
                            <input type="date" id="date_of_birth" name="date_of_birth" placeholder='Date of birth' onChange={handleChange} value={userdata.date_of_birth} required />
                            <input type="text" id="phone" name="phone" placeholder='Phone' onChange={handleChange} value={userdata.phone} required />
                            <button type="submit" className='update-submit-button'>Save</button>
                            <button className='update-cancel-button' onClick={()=>{window.location.href = '/profile';}}>Cancel</button>
                        </form>
                        {errortext && <Popup message={errortext} onClose={handlePopupClose} />}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Profile