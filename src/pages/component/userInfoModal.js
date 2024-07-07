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
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { TextField, Button, Box } from '@mui/material';
const UserInfoModal = ({ open, onClose, onSubmit, onSuccess }) => {
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield onSubmit(formData);
            setFormData({ name: '', phoneNumber: '', email: '' }); // Reset form data
            onClose();
            if (onSuccess)
                onSuccess(); // Execute optional success callback
        }
        catch (error) {
            console.error('Error submitting form:', error);
            // Handle error if necessary
        }
    });
    return (_jsx(Modal, { open: open, onClose: onClose, "aria-labelledby": "user-info-modal", "aria-describedby": "modal-to-get-user-info", className: "modal", children: _jsxs(Box, { sx: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }, children: [_jsx("h2", { children: "User Information" }), _jsxs("form", { onSubmit: handleSubmit, className: "modal-form", children: [_jsx(TextField, { label: "Name", variant: "outlined", fullWidth: true, name: "name", value: formData.name, onChange: handleChange, required: true, sx: { mb: 2 } }), _jsx(TextField, { label: "Phone Number", variant: "outlined", fullWidth: true, type: "tel", name: "phoneNumber", value: formData.phoneNumber, onChange: handleChange, required: true, sx: { mb: 2 } }), _jsx(TextField, { label: "Email", variant: "outlined", fullWidth: true, type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, sx: { mb: 2 } }), _jsx(Button, { type: "submit", variant: "contained", color: "primary", fullWidth: true, sx: { mt: 2 }, children: "Submit" })] })] }) }));
};
export default UserInfoModal;
