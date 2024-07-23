import React, {useEffect, useState} from 'react';
import './Profile.css'
import ApiService from '../apiService/apiService';

const Profile = () => {
    const [userdata, setUserdata] = useState([]);
    useEffect(() => {
        console.log("Inside use effect")
        const token = localStorage.getItem('token');
        const fetchData = async () => {
            try {
                const response = await ApiService.fetch_data('/api/get-user/', token);
                console.log('Successful API response:', response);
                setUserdata(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                localStorage['token']=''
            }
        };
        fetchData();
    }, []);

    return(
        <div className='profile-main-container'>
            <div className='header-container'>
                <h1 style={{color:'black'}}>Profile</h1>
            </div>
             <div key={userdata.id}  className='profile-details-container'>
                <h2 style={{color:'white'}}>{userdata.first_name} {userdata.last_name}</h2>
                <div className="profile-details">
                    <div style={{margin: '40px 0 0 0'}}>
                        <p><strong style={{margin:'0 82px 0 20px'}}>Email:</strong><strong>{userdata.email}</strong></p>
                        <p><strong style={{margin:'0 98px 0 20px'}}>Age:</strong><strong>{userdata.age}</strong></p>
                        <p><strong style={{margin:'0 16px 0 20px'}}>Date of Birth:</strong><strong> {userdata.date_of_birth}</strong></p>
                        <p><strong style={{margin:'0 72px 0 20px'}}>Phone:</strong><strong> {userdata.phone}</strong></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Profile