import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { TextField, Button, Box } from '@mui/material';
import UserForm from '../../Content';

interface UserInfoModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: UserForm) => Promise<UserForm>;
  onSuccess?: () => void; // Optional callback for success action
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ open, onClose, onSubmit, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  });

  useEffect(() => {
    if (open) {
      setFormData({
        name: '',
        phoneNumber: '',
        email: ''
      });
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await onSubmit(formData);
      setFormData({ name: '', phoneNumber: '', email: '' }); // Reset form data
      onClose();
      if (onSuccess) onSuccess(); // Execute optional success callback
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error if necessary
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-info-modal"
      aria-describedby="modal-to-get-user-info"
      className="modal"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>User Information</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserInfoModal;
