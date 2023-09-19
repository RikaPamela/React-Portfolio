// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbars from './Navbar/navbars';
import Home from './home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Projects from './Projects/projects';

function AppRouter() {
  return (
    <>

    <Router>
      
        <Routes>
          <Route path="/" exact element={<Home/>} />
          
          <Route path="/about" element={<About/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      
    </Router>
  </>
  );
}

export default AppRouter;
