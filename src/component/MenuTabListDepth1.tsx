import React from "react";
import Button from "./Button";

// 상위 페이지에서 받은 props 저장

interface MenuDepth1TabListProps {
  selectedDepth1: string;
  onSelect: (value: string) => void;
}

// MenuDepth1TabList 타입은 MenuDepth1TabListProps를 상속받는다 라는 뜻

const MenuDepth1TabList :React.FC<MenuDepth1TabListProps> = ({ selectedDepth1, onSelect }) => {
  const menus = ['회계관리', '부가가치', '인사급여', '법인조정', '개인조정', '물류관리'];

  return(
    <div className="mainDepth1_topFlex">
      <ul className="mainDepth1_TabList">
        {menus.map(menu => (
          <li key ={menu}>
            <Button name={menu === selectedDepth1 ? 'menu_btn selected' : 'menu_btn'} onClick={() => onSelect(menu)} label={menu} />
          </li>
        ))}  
      </ul>
      <div className="rightCont">
        <div className="mainDepth1_SearchBox">
          <input type="text" className="mainDepth1_SearchInput" placeholder="메뉴검색"/>
          <Button name="mainDepth1_search_btn" label="검색" onClick={() => {}} />
        </div>
        <span className="modalCloseBtn"></span>
      </div>      
    </div>    
  );
}

export default MenuDepth1TabList;