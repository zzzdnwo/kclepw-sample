import React from "react";

import Button from "../component/Button";
import MenuTabList from "../component/MenuTabList";

function handleClick() {
    const header:any = document.querySelector(".main_header");
    header.classList.toggle("on");
}

// Main에서 Header에 props로 selectedDepth1, onSelect를 받기
type HeaderProps = {
  selectedDepth1: string;
  onSelect: (menu: string) => void;
}

function Header({ selectedDepth1, onSelect }: HeaderProps) {
  return(
    <header className="main_header">
      <div className="main_header_top">
        <span className="header_menu_btn">햄버거 버튼</span>
        <div className="header_searchCont">
          <input type="text" className="header_search_input" placeholder="메뉴검색"/>
          <Button name="header_search_btn" label="검색" onClick={handleClick} />
        </div>
        <Button name="header_opener" label="&gt;" onClick={handleClick} />
        <MenuTabList selectedDepth1={selectedDepth1} onSelect={onSelect}/>
      </div>      
      <div className="main_header_bottom">
        <span className="header_menu_btn">햄버거 버튼</span>
        <span className="header_goHome_btn">홈으로 버튼</span>
      </div>
    </header>
  );
}

export default Header;