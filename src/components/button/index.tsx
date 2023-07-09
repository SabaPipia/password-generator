import React, { useState } from "react";
import styled from "styled-components";
import IconArrowRight from "../../assets/icon-arrow-right";

interface ButtonProps {
  generatePassword: () => void;
}

const Button: React.FC<ButtonProps> = ({ generatePassword }) => {
  const [iconColor, setIconColor] = useState("#24232C");
  const handleHover = () => {
    setIconColor("#a4ffaf");
  };
  const handleMouseOut = () => {
    setIconColor("#24232C");
  };
  return (
    <div>
      <Btn
        onClick={() => generatePassword()}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseOut}
      >
        GENERATE <IconArrowRight iconColor={iconColor} />
      </Btn>
    </div>
  );
};
const Btn = styled.div`
  cursor: pointer;
  width: 100%;
  height: 45px;
  background-color: #a4ffaf;
  border: 1px solid #a4ffaf;
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &:hover {
    background-color: #18171f;
    color: #a4ffaf;
  }
`;

export default Button;
