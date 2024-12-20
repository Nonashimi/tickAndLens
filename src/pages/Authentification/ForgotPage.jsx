import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const ForgotPage = () =>{
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // State for loading animation
    const [isCorrect, setIsCorrect] = useState(false);
    const [verificationCode, setCode] = useState('');
    const navigate = useNavigate();

    /**
     * Handles the forgot password request
     * @param {React.FormEvent<HTMLFormElement>} e - The form event
     */
    const handleForgotPassword = (e) => {
        e.preventDefault();
        setLoading(true); // Show loader while waiting for the response

        // Make the request
        axios
            .post('http://localhost:9000/auth/forgot/password', { email })
            .then((res) => {
                const message = res.data.message || 'Email is correct';
                alert(message);
                setIsCorrect(true);
            })
            .catch((err) => {
                const errorMessage = err.response?.data?.message || 'Password changing failed!';
                console.error(err);
                alert(`Error: ${errorMessage}`);
            })
            .finally(() => setLoading(false)); 
    };

    const handleVerifyPassword = (e) =>{
        e.preventDefault();
        axios
            .post('http://localhost:9000/auth/forgot/password/verify', { email, verificationCode })
            .then((res) => {
                // Show the success message
                const message = res.data.message || 'Email is correct';
                alert(message);
                navigate("/authentification/new_password",  { state: { email } });
            })
            .catch((err) => {
                // Show the error message
                const errorMessage = err.response?.data?.message || 'Registration failed!';
                console.error(err);
                alert(`Error: ${errorMessage}`);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1 className='text-[30px]'>FORGOT YOUR PASSWORD?</h1>
                <form onSubmit={handleForgotPassword} className="loginsignup-fields">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                    />
                  
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Reset Password'}
                    </button>
                </form>
                {loading && <div className="loader"></div>} {/* Loader Display */}
                {isCorrect? <form className="redirect-login" onSubmit={handleVerifyPassword}>
                <input
                        type="text"
                        placeholder="Enter verification code"
                        value={verificationCode}
                        onChange={(e) => setCode(e.target.value)}
                        maxLength={4}
                    />
                    <button type="submit">Verify</button>
                </form>:""}
               
            </div>
        </div>
    );
}