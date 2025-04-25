import React from "react";
import Button from "./Button";


function MenuTabList({ selectedDepth1, onSelect }) {
  const menus = ['회계관리', '부가가치', '인사급여', '법인조정', '개인조정', '물류관리'];
  

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