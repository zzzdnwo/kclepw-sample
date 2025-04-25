import React from "react";
import MenuDepth4TabList from "./MenuTabListDepth4";

function MenuDepth3TabList( { selectedDepth2 } ){
  const menuData = {
    재무회계: {
      depth3: ['전표입력' , '기타전입력', '장부관리I', '장부관리II', '결산관리', '고정자산및감가상가', '전기분재무제표', '기초정보관리']
    },
    "자금/예산/현장등": {
      depth3: ['부가가치세', '법인세', '소득세', '부가세신고']
    },
    "데이터분석/관리": {
      depth3: ['인사관리', '급여관리', '4대보험']
    },
    "데이터연동/기타": {
      depth3: ['법인조정']
    }   
  }
 
  const depth3List = menuData[selectedDepth2].depth3;
  return(
    <div className="mainDepth3">
      {depth3List.map(menu => (
        <ul className="depth3List" key={menu}>
          <li key={menu} className="depth3Title">{menu}</li>
          <MenuDepth4TabList selectedDepth2={selectedDepth2} selectMenu={menu} />
        </ul>  
      ))}
    </div>
  );
}

export default MenuDepth3TabList;