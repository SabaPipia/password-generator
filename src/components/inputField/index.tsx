import styled from "styled-components";

function InputField() {
  return (
    <>
      <Input />
    </>
  );
}

const Input = styled.input`
  width: 340px;
  background-color: #23232c;
  font-size: 28px;
  padding: 20px 30px 20px 30px;
  border: none;
  color: #ffff;
`;

export default InputField;
