import React from "react";
import Button from "./Button";

//상위 페이지 에서 받은 props type 정의
interface MenuTabListProps {
  selectedDepth1: string;
  onSelect: (menu: string) => void;
}

// interface로 정의한 props React.FC로 사용
const MenuTabList :React.FC<MenuTabListProps> = ({ selectedDepth1, onSelect }) =>{
  const menus = ['회계관리', '부가가치', '인사급여', '법인조정', '개인조정', '물류관리'];
  
  // 화면에서 좌측 메뉴 리스트 컴포넌트
  return(
    <ul className="main_header_Tablist">
      {menus.map((menu, index) => (
        <li key={menu} className={selectedDepth1 === menu ? 'active' : ''} onClick={() => onSelect(menu)}>
          <Button name={`header_menu_btn btn${index}`} />
            <span>{menu}</span>
        </li>
      ))}
    </ul>
  );
}

export default MenuTabList;