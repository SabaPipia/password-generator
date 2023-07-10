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
    if (password && password.length != 0) {
      void navigator.clipboard.writeText(password);
      setIsCopied(true);
    } else {
      console.error("Failed to copy password to clipboard:");
    }
  };
  return (
    <>
      <Wrapper>
        <Input
          placeholder="P4$5W0rD!"
          value={password}
          pswLeng={password.length}
          readOnly
        />
        {isCopied ? <CopyText>Copied!</CopyText> : null}
        <Copy copyValue={copyValue} />
      </Wrapper>
    </>
  );
};

const Input = styled.input<{ pswLeng: number }>`
  width: 340px;
  background-color: #23232c;
  ${(props) => {
    if (props.pswLeng > 18) {
      return {
        fontSize: "20px",
        padding: "24px 50px 24px 30px",
      };
    } else {
      return {
        fontSize: "24px",
        padding: "22px 50px 22px 30px",
      };
    }
  }};
  border: none;
  color: #fff;
  position: relative;
  @media (max-width: 430px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;
const CopyText = styled.p`
  position: absolute;
  color: #a4ffaf;
  transform: translate(470%, 127%);
  @media (max-width: 430px) {
    transform: translate(350%, 400%);
  }
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
