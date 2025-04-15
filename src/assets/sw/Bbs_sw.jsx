import React from "react";



function BbsPost(props){
  return (
    <li className={props.new ? "new" : ""}>
      <div className="title">
        <span>{props.title}</span>
      </div>
      <div className="date">
        <span>{props.date}</span>
      </div>
    </li>    
  );
}

export default BbsPost;