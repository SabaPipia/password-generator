import styled from "styled-components";
import Copy from "../../assets/icon-copy";

function InputField() {
  return (
    <>
      <Wrapper>
        <Input placeholder="P4$5W0rD!" />
        <Copy />
      </Wrapper>
    </>
  );
}

const Input = styled.input`
  width: 340px;
  background-color: #23232c;
  font-size: 24px;
  padding: 20px 50px 20px 30px;
  border: none;
  color: #fff;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  svg {
    position: absolute;
    cursor: pointer;
    transform: translate(-170%);
  }
  &:hover {
    svg {
      stroke: #fff;
    }
  }
`;

export default InputField;
