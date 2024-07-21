import React, { useEffect } from 'react';
import './Home.css';
import players from '../../Assets/players.jpg';
const ComponentWithBackgroundImage = () => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token', token)
}, []);

  return (
    <div className="home-container">
      <div className='container-1'></div>
      <div className='container-2'>
        <h2 className='container-2-h2'>Unleash Your Potential Enter the Arena of Champions!!</h2>
      </div>
      <div className='container-3'>
        <div>
        <h2 className='container-3-h2'>Craft your ultimate tournament experience</h2>
        </div>
        <div>
        <button className="new-line-button" >Host</button>
        </div>
      </div>
      <div className='container-4'>
        <div className='container-4-div-1'>
          <h2 className='container-4-h2'>Form your dream
          <p className='container-4-h2-p-1'>Team</p>
          from scratch</h2>
          <button>Build</button>
        </div>
        <img src={players} alt="Example" className="image" />
      </div>
      <div className='container-5'>
        <p>www.tourneyhub.com</p>
      </div>
    </div>
  );
}

export default ComponentWithBackgroundImage;
