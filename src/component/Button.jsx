import React from "react";



function Button({label,name,onClick}){

  /*
  function handleClick() {
    if(`${props.onClick}` === "open"){
      const header = document.querySelector(".main_header");
      //const menu = document.querySelector(".main_header_Tablist");
      alert(header);
      // header.classList.toggle("on");
      //menu.classList.toggle("open");
    }
    
  }
*/

  return(
    <button type="button" className={name} onClick={onClick}>{label}</button>
  );
}

export default Button;