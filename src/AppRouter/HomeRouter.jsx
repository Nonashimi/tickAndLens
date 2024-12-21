import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from '../pages/Home/HomePage';
import ContactPage from '../pages/Home/ContactPage';
import {Navigate} from "react-router-dom"
import GlassesPage from '../pages/Home/GlassesPage';
import ProductPage from '../pages/Home/ProductPage';
import BacketPage from '../pages/Home/BacketPage';
import { WatchPage } from '../pages/Home/WatchPage';
import { JewelerlyPage } from '../pages/Home/JewelerlyPage';
const HomeRouter = () => {
  return (
    <Routes>
        <Route path="" element={<Navigate to="preview" />} />
        <Route path='preview' element = {<HomePage/>}/>
        <Route path='contacts' element = {<ContactPage/>}/>
        <Route path='glasses/*' element = {<GlassesPage/>}/>
        <Route path='glasses/:id' element = {<ProductPage/>}/>
        <Route path = "watch/*" element = {<WatchPage/>}/>
        <Route path='watch/:id' element = {<ProductPage/>}/>
        <Route path = "jewelerly/*" element = {<JewelerlyPage/>}/>
        <Route path='jewelerly/:id' element = {<ProductPage/>}/>
        <Route path='backet' element = {<BacketPage/>}/>
    </Routes>
  )
}

export default HomeRouter