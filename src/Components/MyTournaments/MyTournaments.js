import React, { useState } from 'react';
import TournamentCreationMaterialUiPopup from './MaterialUiPopup /TournamentCreationMaterialUiPopup';
import { Button } from '@mui/material';

const MyTournaments = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Register Tournament
      </Button>
      <TournamentCreationMaterialUiPopup open={open} onClose={handleClose} />
    </div>
    )
}
export default MyTournaments