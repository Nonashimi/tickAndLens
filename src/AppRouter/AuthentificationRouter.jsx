import React from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'; 
import Login from '../pages/Authentification/Login/login';
import Signup from '../pages/Authentification/LoginSignup/LoginSignup';
import Verify from '../pages/Authentification/Verify';
import { ForgotPage } from '../pages/Authentification/ForgotPage';
import NewPassowrd from '../pages/Authentification/NewPassowrd';

const AuthentificationRouter = () => {
  return (
    <Routes>
        <Route path='' element = {<Navigate to = "sign_in"/>}/>
        <Route path = "sign_in" element ={<Login/>}/>
        <Route path = "sign_up" element = {<Signup/>}/>
        <Route path="verify" element = {<Verify/>}/>
        <Route path = "forgot" element = {<ForgotPage/>}/>
        <Route path='new_password' element = {<NewPassowrd/>}></Route>
    </Routes>
  )
}

export default AuthentificationRouter