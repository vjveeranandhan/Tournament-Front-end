import React, {useState} from 'react';
import './Club.css';
import ApiService from '../apiService/apiService';
import Popup from '../PopUp/Popup';

const Club = () => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errortext, setErrortext] = useState('');
  const countriesAndStates = {
      'China': {
        'Beijing': ['Dongcheng', 'Xicheng', 'Chaoyang'],
        'Shanghai': ['Huangpu', 'Jing\'an', 'Xuhui'],
        'Guangdong': ['Guangzhou', 'Shenzhen', 'Dongguan'],
        'Zhejiang': ['Hangzhou', 'Ningbo', 'Wenzhou']
      },
      'India': {
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
        'Kerala': ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", 
          "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", 
          "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]
      },
      'Japan': {
        'Tokyo': ['Shibuya', 'Shinjuku', 'Chiyoda'],
        'Osaka': ['Osaka City', 'Sakai', 'Higashi-Osaka'],
        'Kyoto': ['Shimogyo', 'Fushimi', 'Sakyo'],
        'Hokkaido': ['Sapporo', 'Asahikawa', 'Hakodate']
      },
      'South Korea': {
        'Seoul': ['Jongno-gu', 'Gangnam-gu', 'Yongsan-gu'],
        'Busan': ['Haeundae-gu', 'Dongnae-gu', 'Saha-gu'],
        'Incheon': ['Bupyeong-gu', 'Nam-gu', 'Yeonsu-gu'],
        'Gyeonggi': ['Suwon', 'Yongin', 'Ansan']
      },
      'Thailand': {
        'Bangkok': ['Bang Rak', 'Pathum Wan', 'Phaya Thai'],
        'Phuket': ['Mueang Phuket', 'Kathu', 'Thalang'],
        'Chiang Mai': ['Mueang Chiang Mai', 'San Sai', 'Hang Dong'],
        'Krabi': ['Mueang Krabi', 'Ao Luek', 'Khao Phanom']
      },
    };

    const [formData, setFormData] = useState({
        club_name: '',
        country: '',
        state: '',
        district: '',
        location: '',
        phone: '',
        email: '',
        president: '',
        vice_president: '',
        treasurer: '',
        secretary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setFormData(prevState => ({
          ...prevState,
          country: selectedCountry,
          state: '',
          district: ''
        }));
      };

    const handleStateChange = (e) => {
      const selectedState = e.target.value;
      setFormData(prevState => ({
        ...prevState,
        state: selectedState,
        district: ''
      }));
    };

    const handleDistrictChange = (e) => {
      const selectedDistrict = e.target.value;
      setFormData(prevState => ({
        ...prevState,
        district: selectedDistrict
      }));
    };

    const isValidPhoneNumber = (phoneNumber) => {
      const cleaned = phoneNumber.replace(/\D/g, '');
      const isValid = cleaned.length === 10;
  
      return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        console.log(localStorage['token'])
      try {
        if (re.test(formData['email']) === false) {
          setErrortext("Invalid Email!");
          return; 
        }
        if (!isValidPhoneNumber(formData.phone)) {
          setErrortext("Invalid Phone!");
          return; 
        }
        const response = await ApiService.register('/api/club/', formData, localStorage['token']);
        console.log(response)
        setErrortext(response.data.message);
        setErrortext('Club registration successful!');
            setTimeout(() => {
                window.location.href = '/login';
              }, 6000);
        window.location.reload();
        window.location.href = '/club';

      } catch (error) {
        console.error('Error fetching data:', error);
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
        <div className="club-container">
            <form className="club-form" onSubmit={handleSubmit}>
                <h2 className='signup-h2-1'>Create Club</h2>
                <input type="text" id="club_name" name="club_name" placeholder='Club Name' onChange={handleChange} value={formData.first_name} required />
                <select className='select' name="country" value={formData.country} onChange={handleCountryChange} required>
                    <option value="">Select a country...</option>
                    {Object.keys(countriesAndStates).map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <select className='select' name="state" value={formData.state} onChange={handleStateChange} disabled={!formData.country} required>
                    <option value="">Select a state/region...</option>
                    {formData.country && countriesAndStates[formData.country] && Object.keys(countriesAndStates[formData.country]).map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <select className='select' name="district" value={formData.district} onChange={handleDistrictChange} disabled={!formData.state} required>
                    <option value="">Select a district...</option>
                    {formData.country && formData.state && countriesAndStates[formData.country][formData.state] && countriesAndStates[formData.country][formData.state].map(district => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                </select>
                <input type="text" id="email" name="email" placeholder='Email' onChange={handleChange} value={formData.email} required />
                <input type="text" id="phone" name="phone" placeholder='Phone' onChange={handleChange} value={formData.phone} required />
                {/* <input type="text" id="president" name="president" placeholder='President' onChange={handleChange} value={formData.president} required />
                <input type="text" id="vice_president" name="vice_president" placeholder='Vice president' onChange={handleChange} value={formData.vice_president} required />
                <input type="text" id="treasurer" name="treasurer" placeholder='Treasurer' onChange={handleChange} value={formData.treasurer} required />
                <input type="text" id="secretary" name="secretary" placeholder='Secretary' onChange={handleChange} value={formData.secretary} required /> */}
                <button type="submit">Create &rarr;</button>
            </form>
            {errortext && <Popup message={errortext} onClose={handlePopupClose} />}
        </div>
    );
  }
export default Club