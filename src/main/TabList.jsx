import React, { useState } from 'react';
//import './TabList.scss'; // 스타일은 따로 관리

function TabList({ tabs = [], contents = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabList">
      <ul className="tabList_tabs">
        {tabs.map((tab, index) => (
          <li 
            key={index} 
            className={`tabList_tab ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tabList_content">
       {contents[activeIndex]}
      </div>
    </div>
  );
}

export default TabList;
