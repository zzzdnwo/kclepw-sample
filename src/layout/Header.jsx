import React from "react";

import Button from "../component/Button.jsx";
import MenuTabList from "../component/MenuTabList.jsx";

function handleClick() {
  
    const header = document.querySelector(".main_header");
    //const menu = document.querySelector(".main_header_Tablist");
    //alert(header);
    header.classList.toggle("on");

    //menu.classList.toggle("open");
}

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
        <MenuTabList selected={selectedDepth1} onSelect={onSelect}/>
      </div>      
      <div className="main_header_bottom">
        <span className="header_menu_btn">햄버거 버튼</span>
        <span className="header_goHome_btn">홈으로 버튼</span>
      </div>
    </header>
  );
}

export default Header;