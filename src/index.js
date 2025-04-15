import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/main.scss';

import Main from './main/Main';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />      
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>  
);


