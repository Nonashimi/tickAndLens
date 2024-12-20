import React from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'; 
import Login from '../pages/Authentification/Login/login';
import Signup from '../pages/Authentification/LoginSignup/LoginSignup';
import Verify from '../pages/Authentification/Verify';

const AuthentificationRouter = () => {
  return (
    <Routes>
        <Route path='' element = {<Navigate to = "sign_in"/>}/>
        <Route path = "sign_in" element ={<Login/>}/>
        <Route path = "sign_up" element = {<Signup/>}/>
        <Route path="verify" element = {<Verify/>}/>
    </Routes>
  )
}

export default AuthentificationRouter