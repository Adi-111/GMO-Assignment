import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import UserInfoModal from './component/userInfoModal'; // Ensure correct path to UserInfoModal
import UserForm from '../Content';

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitUserInfo = async (data: UserForm): Promise<UserForm> => {
    // Perform some asynchronous operation, e.g., an API call
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
  
    // Return the processed data
    const UserData = data;
    
    navigate('/SecondP');
    return UserData;
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full text-center px-6 py-12 bg-white rounded-lg shadow-lg">
        <Typography variant="h4" gutterBottom className="text-center">
          Welcome !
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal} fullWidth>
          Get In
        </Button>
      </div>
      <UserInfoModal open={modalOpen} onClose={handleCloseModal} onSubmit={handleSubmitUserInfo} />
    </div>
  );
};

export default HomePage;
