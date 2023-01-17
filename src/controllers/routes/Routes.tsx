import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../../views/pages/Home'
import About from '../../views/pages/About'
import Contact from '../../views/pages/Contact'
import NotFound from '../../views/pages/NotFound'
// import {Home, About, Contact, NotFound} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
