import React from 'react';
import './Home.css';
import players from '../../Assets/players.jpg';
const ComponentWithBackgroundImage = () => {
  return (
    <div className="home-container">
      <div className='container-1'></div>
      <div className='container-2'>
        <h2 className='container-2-h2'>Unleash Your Potential Enter the Arena of Champions!!</h2>
      </div>
      <div className='container-3'>
        <h2 className='container-3-h2'>Craft your ultimate tournament experience</h2>
        <button>Host</button>
      </div>
      <div className='container-4'>
        <h2 className='container-4-h2'>Form your dream <h1>Team</h1> from scratch</h2>
        <button>Build</button>
        <img src={players} alt="Example" className="image" />
      </div>
      <div className='container-5'>
        <p>www.tourneyhub.com</p>
      </div>
    </div>
  );
}

export default ComponentWithBackgroundImage;
