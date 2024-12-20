import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:9000/auth/login', { email, password })
            .then((res) => {
                console.log(res);
                
                localStorage.setItem('token', res.data.token); // Store token
                navigate('/home'); // Redirect to home
            })
            .catch((err) => {
                console.error(err);
                alert('Invalid email or password!');
            });
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1 className='text-[30px]'>Login</h1>
                <form onSubmit={handleLogin} className="loginsignup-fields">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between">
                        <NavLink to = "/authentification/forgot">
                            forgot your password?
                        </NavLink>
                        <NavLink to = {"/authentification/sign_up"}>Sign Up Here</NavLink>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
