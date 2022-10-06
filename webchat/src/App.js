import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import './style.scss';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/chat" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;