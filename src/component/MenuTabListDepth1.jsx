import React from "react";
import Button from "./Button";


/*function handleClick() {

}*/

function MenuDepth1TabList({ selectedDepth1, onSelect }) {
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
      <div className="mainDepth1_SearchBox">

      </div>
    </div>    
  );
}

export default MenuDepth1TabList;