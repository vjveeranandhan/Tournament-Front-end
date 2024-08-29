import React, { useState } from 'react';
import ApiService from '../../apiService/apiService';
import './TournamentCreationMaterialUiPopup.css';
import {
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Grid, InputAdornment, FormControl, FormHelperText
} from '@mui/material';
import Popup from '../../PopUp/Popup';

const TournamentCreationMaterialUiPopup = ({ open, onClose }) => {
  const [errortext, setErrortext] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    latitude: '',
    longitude: '',
    date: '',
    time: '',
    address: '',
    registration_fees: '',
    first_price: '',
    second_price: '',
    num_of_teams: '',
    poster: null,
    createdUserId: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      poster: e.target.files[0]
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'title', 'description', 'location', 'date', 'time',
      'address', 'registration_fees', 'first_price', 'second_price', 'num_of_teams'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field] === '') {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await ApiService.register('/api/register-tournament/', formData, localStorage['token']);
      setErrortext('Tournament registration successful!');
      setTimeout(() => {
        window.location.href = '/login';
      }, 6000);
      window.location.reload();
      window.location.href = '/club';
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrortext(error.response.data.message);
      } else {
        setErrortext('Something went wrong. Please try again later.');
      }
    }
  };

  const handlePopupClose = () => {InputAdornment
    setErrortext('');
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Tournament Registration</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {['title', 'location', 'first_price', 'second_price', 'date', 'time', 'description', 'address', 'registration_fees', 'num_of_teams'].map(field => (
            <Grid item xs={12} sm={6} key={field}>
              <FormControl fullWidth margin="normal" error={Boolean(errors[field])}>
                <TextField
                  label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  name={field}
                  type={field === 'date' ? 'date' : field === 'time' ? 'time' : field === 'first_price' || field === 'second_price' || field === 'registration_fees' || field === 'num_of_teams' ? 'number' : 'text'}
                  InputLabelProps={field === 'date' || field === 'time' ? { shrink: true } : {}}
                  fullWidth
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
                <FormHelperText>{errors[field]}</FormHelperText>
              </FormControl>
            </Grid>
          ))}
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="poster"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="poster">
              <Button variant="contained" component="span">
                Upload Poster
              </Button>
            </label>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
      {errortext && <Popup message={errortext} onClose={handlePopupClose} />}
    </Dialog>
  );
};

export default TournamentCreationMaterialUiPopup;
