import React, { useState } from 'react';
//메인 페이지 관련 공통 CSS 및 레이아웃
import '../assets/styles/main.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
//메뉴 탭 리스트
import MenuDepth1TabList from '../component/MenuTabListDepth1';
import MenuDepth2TabList from '../component/MenuTabListDepth2';
import MenuDepth3TabList from '../component/MenuTabListDepth3';

// 현재 뎁스 상태 관리
const Main = () =>{
  const [selectedDepth1, setSelectedDepth1] = useState<string>('회계관리');
  const [selectedDepth2, setSelectedDepth2] = useState<string>('재무회계');
  
// 화면 렌더링 컴포넌트
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
        {/* <Footer/> */}
      </div>      
    </div>  
  );
}

export default Main;