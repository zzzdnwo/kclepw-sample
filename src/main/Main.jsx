import React, { useState } from 'react';
import '../assets/styles/main.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MenuDepth1TabList from '../component/MenuTabListDepth1';
import MenuDepth2TabList from '../component/MenuTabListDepth2';
import MenuDepth3TabList from '../component/MenuTabListDepth3';

function Main(props){
  const [selectedDepth1, setSelectedDepth1] = useState('회계관리');
  const [selectedDepth2, setSelectedDepth2] = useState('재무회계');
  

  return (
    <div className="main">
      <Header selectedDepth1={selectedDepth1} onSelect={setSelectedDepth1}/>
      <div className="main_contents">
        <div className="contents_mainDepth1">
          <div className="mainDepth1_top">
            <MenuDepth1TabList selectedDepth1={selectedDepth1} onSelect={setSelectedDepth1}/>
          </div>
          <div className="mainDepth1_bottom">
              <MenuDepth2TabList selectedDepth1={selectedDepth1} onSelect={setSelectedDepth2}/>
              <MenuDepth3TabList selectedDepth2={selectedDepth2}/>
          </div>
        </div>
        <Footer/>
      </div>      
    </div>  
  );
}

export default Main;