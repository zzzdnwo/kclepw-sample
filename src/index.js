import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './main/Main';
import Mainsw from './assets/sw/Main_sw';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sw" element={<Mainsw />} />      
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>  
);


