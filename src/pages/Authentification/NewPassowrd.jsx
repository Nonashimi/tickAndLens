import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const NewPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email; 
    const handleNewPassword = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:9000/auth/reset/password', { email, newPassword })
            .then(() => {
                navigate('/authentification/login');
            })
            .catch((err) => {
                console.error(err);
                alert('New Password configuration failed!');
            }); 
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1 className='text-[30px]'>New Password</h1>
                <form onSubmit={handleNewPassword} className="loginsignup-fields">
                    <p>Your new password must be different from previously used password.  <strong>{email}</strong></p>
                    <input
                        type="text"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder="repeat password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default NewPasswordPage;
