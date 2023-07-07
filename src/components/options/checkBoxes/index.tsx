import styled from "styled-components";

interface CheckBoxesProps {
  content: string;
}

const CheckBoxes: React.FC<CheckBoxesProps> = ({ content }) => {
  return (
    <Wrapper>
      <CheckBox type="checkbox" />
      <Label>{content} </Label>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;
const CheckBox = styled.input`
  scale: 1.4;
`;
const Label = styled.h3`
  color: #ffff;
  font-size: 17px;
`;
export default CheckBoxes;
