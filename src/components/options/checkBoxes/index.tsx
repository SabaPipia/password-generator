import styled from "styled-components";
import { CheckBox, Label, Wrapper } from "./style";

interface CheckBoxesProps {
  content: string;
}

const CheckBoxes: React.FC<CheckBoxesProps> = ({ content }) => {
  return (
    <Wrapper>
      <CheckBox type="checkbox" />
      <Label>{content}</Label>
    </Wrapper>
  );
};

export default CheckBoxes;
