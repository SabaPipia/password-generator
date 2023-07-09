import React from "react";
import styled, { css } from "styled-components";

interface StrengthProps {
  str: string;
}

const Strength: React.FC<StrengthProps> = ({ str }) => {
  console.log(str);
  return (
    <Wrapper>
      <Header>Strength</Header>
      <RightPart>
        <StrengthMessage>Too Strong</StrengthMessage>
        <Wrap />
        <StrengthIndicator />
        <StrengthIndicator />
        <StrengthIndicator />
        <StrengthIndicator />
        <Wrap />
      </RightPart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #18171f;
  padding: 20px 15px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const Header = styled.h3`
  color: #817d92;
  font-size: 16px;
  width: 70%;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;
const RightPart = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
const StrengthMessage = styled.h2`
  font-size: 15px;
  color: #fff;
`;
const StrengthIndicator = styled.div`
  border: 1px solid #fff;
  width: 7px;
  margin-left: 3px;
  display: flex;
`;
const Wrap = styled.div``;

export default Strength;
