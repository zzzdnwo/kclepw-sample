import React from "react";



function VodItem(props){
  return (
    <li>
      <div className="title">
        <span className="vod_h1">{props.title}</span>
        <span className="vod_h2">{props.subtitle}</span>
      </div>
      <span className="platformTxt">{props.platform}</span>
    </li>    
  );
}

export default VodItem;