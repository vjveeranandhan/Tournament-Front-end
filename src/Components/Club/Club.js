import React, {useState} from 'react';
import './Club.css';
const Club = () => {
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
          'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara']
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
          district: '' // Reset state and district selection when country changes
        }));
      };
    
      // Event handler for state selection change
      const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setFormData(prevState => ({
          ...prevState,
          state: selectedState,
          district: '' // Reset district selection when state changes
        }));
      };
    
      // Event handler for district selection change
      const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setFormData(prevState => ({
          ...prevState,
          district: selectedDistrict
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log("Handle submit", formData)
    }
    
    return(
        <div className="club-container">
            <form className="club-form" onSubmit={handleSubmit}>
                <h2 className='signup-h2-1'>Create Club</h2>
                <input type="text" id="club_name" name="club_name" placeholder='Club Name' onChange={handleChange} value={formData.first_name} required />
                <select className='select' name="country" value={formData.country} onChange={handleCountryChange}>
                    <option value="">Select a country...</option>
                    {Object.keys(countriesAndStates).map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <select className='select' name="state" value={formData.state} onChange={handleStateChange} disabled={!formData.country}>
                    <option value="">Select a state/region...</option>
                    {formData.country && countriesAndStates[formData.country] && Object.keys(countriesAndStates[formData.country]).map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <select className='select' name="district" value={formData.district} onChange={handleDistrictChange} disabled={!formData.state}>
                    <option value="">Select a district...</option>
                    {formData.country && formData.state && countriesAndStates[formData.country][formData.state] && countriesAndStates[formData.country][formData.state].map(district => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                </select>
                <input type="text" id="email" name="email" placeholder='Email' onChange={handleChange} value={formData.email} required />
                {/* <input type="text" id="phone" name="phone" placeholder='Phone' onChange={handleChange} value={formData.phone} required />
                <input type="text" id="president" name="president" placeholder='President' onChange={handleChange} value={formData.president} required />
                <input type="text" id="vice_president" name="vice_president" placeholder='Vice president' onChange={handleChange} value={formData.vice_president} required />
                <input type="text" id="treasurer" name="treasurer" placeholder='Treasurer' onChange={handleChange} value={formData.treasurer} required />
                <input type="text" id="secretary" name="secretary" placeholder='Secretary' onChange={handleChange} value={formData.secretary} required /> */}
                <button type="submit">Create &rarr;</button>
            </form>
            {/* {errortext && <Popup message={errortext} onClose={handlePopupClose} />} */}
        </div>
    );
}
export default Club