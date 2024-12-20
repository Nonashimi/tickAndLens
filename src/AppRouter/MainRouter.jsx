import React from 'react'
import { Routes, Route } from 'react-router-dom'; 
import AuthentificationPage from '../pages/Authentification/AuthentificationPage';
import Home from '../pages/Home/Home';
export const MainRouter = () => {
  return (
    <Routes>
        <Route path = "/home/*" element = {<Home/>}/>
        <Route path = "/authentification/*" element = {<AuthentificationPage/>}/>
    </Routes>
  )
}
