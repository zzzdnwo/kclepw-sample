import React from "react";

// 일부 props를 안담는 경우도 있어 ?를 붙여줌
interface ButtonProps {
  label?: string;
  name?: string;
  onClick?: () => void;
}

// 공통 버튼 컴포넌트
const Button :React.FC<ButtonProps> = ({ label, name, onClick }) => {
  return(
    <button type="button" className={name} onClick={onClick}>{label}</button>
  );
}

export default Button;