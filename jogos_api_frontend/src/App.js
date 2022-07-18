import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect, Fragment, useRef} from 'react'
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Libertadores from './pages/Libertadores';
import Sulamericana from './pages/Sulamericana';
import Brasileiro from './pages/Brasileiro';
import CopaBrasil from './pages/CopaBrasil';
import SerieB from './pages/SerieB';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Brasileiro />} />
      <Route path="/libertadores" element={<Libertadores />} />
   
        <Route path="/sulamericana" element={<Sulamericana />} />
        <Route path="/copabrasil" element={<CopaBrasil />} />
        <Route path="/serieb" element={<SerieB />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
