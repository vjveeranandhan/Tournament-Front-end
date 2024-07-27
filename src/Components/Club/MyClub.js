import React from 'react';
import './MyClub.css';

const MyClub = ({ club }) => {
    console.log('club', club)
    return(
        <div className='main-container'>
            <div>
            <div className='container-club-header'>
                <h2>{club.data.club_name}</h2>
                <p>{club.data.description}</p>
            </div>
            </div>
            <div className='sub-containe1' >
                <div className='menu'><h4>TITLES</h4></div>
                <div className='menu'><h4>PLAYERS</h4></div>
                <div className='menu'><h4>TOURNAMENTS</h4></div>
                <div className='menu'><h4>BOARD MEMBERS</h4></div>
                {/* <div className='menu'><h4>container 5</h4></div> */}
            </div>
            <div className='sub-containe2' >
                <h2>Container2</h2>                
            </div>
        </div>
    )
};
export default MyClub