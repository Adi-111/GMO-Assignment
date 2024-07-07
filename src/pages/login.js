var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import UserInfoModal from './component/userInfoModal'; // Ensure correct path to UserInfoModal
const HomePage = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleSubmitUserInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
        // Perform some asynchronous operation, e.g., an API call
        yield new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
        // Return the processed data
        const UserData = data;
        navigate('/SecondP');
        return UserData;
    });
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-screen", children: [_jsxs("div", { className: "max-w-md w-full text-center px-6 py-12 bg-white rounded-lg shadow-lg", children: [_jsx(Typography, { variant: "h4", gutterBottom: true, className: "text-center", children: "Welcome !" }), _jsx(Button, { variant: "contained", color: "primary", onClick: handleOpenModal, fullWidth: true, children: "Get In" })] }), _jsx(UserInfoModal, { open: modalOpen, onClose: handleCloseModal, onSubmit: handleSubmitUserInfo })] }));
};
export default HomePage;
