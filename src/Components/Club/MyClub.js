import React, {useState} from 'react';
import './MyClub.css';
import ClubManagement from '../ClubManagement/ClubManagement';
import ClubTitles from '../Titles/Title';
import ClubPlayers from '../ClubPlayers/ClubPlayers';
import MyTournaments from '../MyTournaments/MyTournaments';
import TournamentInvitations from '../TournamentInvitations/TournamentInvitations';

const MyClub = ({ club }) => {
    const [menuSelection, setMenuSelection] = useState('titles');
    return(
        <div className='main-container'>
            <div>
            <div className='container-club-header'>
                <h2>{club.data.club_name}</h2>
                <p>{club.data.description}</p>
            </div>
            </div>
            <div className='sub-containe1' >
                <div className='menu' onClick={()=>{setMenuSelection('titles')}} style={{ backgroundColor: menuSelection === 'titles' ? 'hsl(271, 100%, 45%)' : 'transparent' }}><h4>TITLES</h4></div>
                <div className='menu' onClick={()=>{setMenuSelection('players')}} style={{ backgroundColor: menuSelection === 'players' ? 'hsl(271, 100%, 45%)' : 'transparent' }}><h4>PLAYERS</h4></div>
                <div className='menu' onClick={()=>{setMenuSelection('my-tournaments')}} style={{ backgroundColor: menuSelection === 'my-tournaments' ? 'hsl(271, 100%, 45%)' : 'transparent' }}><h4>MY TOURNAMENTS</h4></div>
                <div className='menu' onClick={()=>{setMenuSelection('tournament-invitations')}} style={{ backgroundColor: menuSelection === 'tournament-invitations' ? 'hsl(271, 100%, 45%)' : 'transparent' }}><h4>INVITATIONS</h4></div>
                <div className='menu' onClick={()=>{setMenuSelection('board-members')}} style={{ backgroundColor: menuSelection === 'board-members' ? 'hsl(271, 100%, 45%)' : 'transparent' }}><h4>BOARD MEMBERS</h4></div>
            </div>
            <div className='sub-containe2' >
            {menuSelection === 'titles' && <ClubTitles />} 
            {menuSelection === 'players' && <ClubPlayers />}
            {menuSelection === 'board-members' && <ClubManagement />}     
            {menuSelection === 'my-tournaments' && <MyTournaments />}     
            {menuSelection === 'tournament-invitations' && <TournamentInvitations />}      
            </div>
        </div>
    )
};
export default MyClub