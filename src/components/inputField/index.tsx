import styled from "styled-components";
import Copy from "../../assets/icon-copy";

interface InputProps {
  password: string;
  isCopied: boolean;
  setIsCopied: (copy: boolean) => void;
}

const InputField: React.FC<InputProps> = ({
  password,
  isCopied,
  setIsCopied,
}) => {
  const copyValue = () => {
    try {
      if (password) {
        void navigator.clipboard.writeText(password);
        console.log("Password copied to clipboard");
      }
    } catch (error) {
      console.error("Failed to copy password to clipboard:", error);
    }
  };
  return (
    <>
      <Wrapper>
        <Input placeholder="P4$5W0rD!" value={password} />
        {isCopied ? <CopyText>Copied!</CopyText> : null}
        <Copy copyValue={copyValue} setIsCopied={setIsCopied} />
      </Wrapper>
    </>
  );
};
const Input = styled.input`
  width: 340px;
  background-color: #23232c;
  font-size: 24px;
  padding: 20px 50px 20px 30px;
  border: none;
  color: #fff;
  position: relative;
`;
const CopyText = styled.p`
  position: absolute;
  color: #a4ffaf;
  transform: translate(470%, 120%);
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
