import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Hall from './pages/hall';
import Inventions from './pages/handyinventions';
// this is where i import the three pages





function App() {
  return (
   
       
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Hall" element={<Hall/>} exact />
          <Route path="/handyinventions" element={<Inventions/>} exact />
        </Routes>
      </Router>

      // this is how i call in the different pages 

  
  );
}

export default App;

