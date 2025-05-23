import React from "react";
import Button from "./Button";

interface MenuDepth2TabListProps {
  selectedDepth1: string;
  onSelect: (menu: string) => void;
}


const MenuDepth2TabList: React.FC<MenuDepth2TabListProps> = ( { selectedDepth1, onSelect} ) => {

  const menuData:any = {
    회계관리: {
      depth2: ['재무회계' , '자금/예산/현장등', '데이터분석/관리', '데이터연동/기타']
    },
    부가가치: {
      depth2: ['부가가치세', '법인세', '소득세', '부가세신고']
    },
    인사급여: {
      depth2: ['인사관리', '급여관리', '4대보험']
    },
    법인조정: {
      depth2: ['법인조정']
    },
    개인조정: {
      depth2: ['개인조정']
    },
    물류관리: {
      depth2: ['물류관리']
    }
  }

  // 가져오는 값이 배열이라 string[] 로 지정
  const depth2List:string[] = menuData[selectedDepth1]?.depth2 || [];

  return(
    <ul className="mainDepth2_TabList">
      {depth2List.map(menu => (
        <li key={menu} onClick={() => onSelect(menu)}>
          <Button name="menu_btn" label={menu}/>
        </li>
      ))}      
    </ul>
  );
}

export default MenuDepth2TabList;