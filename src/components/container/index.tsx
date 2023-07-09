import styled from "styled-components";
import InputField from "../inputField";
import CharacterLength from "../options/characterLength";
import CheckBoxes from "../options/checkBoxes";
import Strength from "../options/strength";
import Btn from "../button";

function Container() {
  return (
    <Wrapper>
      <InputField />
      <ContainerDiv>
        <CharacterLength />
        <CheckBoxes content="Include Uppercase Letters" />
        <CheckBoxes content="Include Lowercase Letters" />
        <CheckBoxes content="Include Numbers" />
        <CheckBoxes content="Include Symbols" />
        <Strength str={"weak"} />
        <Btn />
      </ContainerDiv>
    </Wrapper>
  );
}
const ContainerDiv = styled.div`
  padding: 30px;
  background-color: #23232c;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  width: 400px;
`;

export default Container;
