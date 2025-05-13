import React from "react";

import Button from "../component/Button";
import MenuTabList from "../component/MenuTabList";

// 메뉴 여닫는 버튼 클릭 이벤트
function handleClick() {
    const header:any = document.querySelector(".main_header");
    header.classList.toggle("on");
}

/* interface 방식이 아닌 type 방식으로 사용도 가능하지만 상위 props 받아 올 땐 interface 방식으로 받는게 좋음
  type HeaderProps = {
    selectedDepth1: string;
    onSelect: (menu: string) => void;
  }

  function Header({ selectedDepth1, onSelect }: HeaderProps) {
*/

interface HeaderProps {
  selectedDepth1: string;
  onSelect: (menu: string) => void;
}

// 좌측 메뉴 전체 컴포넌트
const Header: React.FC<HeaderProps> = ({ selectedDepth1, onSelect }) => {
  return(
    <header>
      <div className="main_header">
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
          <span className="header_menu_btn his">이력 버튼</span>
          <span className="header_menu_btn cafe">카페 버튼</span>
          <span className="header_menu_btn calc">계산 버튼</span>                    
          <span className="header_menu_btn info">정보 버튼</span>          
        </div>
      </div>
    </header>
  );
}

export default Header;