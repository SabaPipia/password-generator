import styled from "styled-components";
import { CheckBox, Label, Wrapper, SingleWrapper } from "./style";

interface CheckBoxesProps {
  setUpperCase: (checked: boolean) => void;
  setLowercase: (checked: boolean) => void;
  setNumbers: (checked: boolean) => void;
  setSymbols: (checked: boolean) => void;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const CheckBoxes: React.FC<CheckBoxesProps> = ({
  setUpperCase,
  setLowercase,
  setNumbers,
  setSymbols,
  uppercase,
  lowercase,
  numbers,
  symbols,
}) => {
  return (
    <Wrapper>
      <SingleWrapper>
        <CheckBox type="checkbox" onClick={() => setUpperCase(!uppercase)} />
        <Label>Include Uppercase Letters</Label>
      </SingleWrapper>
      <SingleWrapper>
        <CheckBox
          type="checkbox"
          onClick={() => setLowercase(!lowercase)}
          defaultChecked={lowercase}
        />
        <Label>Include Lowercase Letters</Label>
      </SingleWrapper>
      <SingleWrapper>
        <CheckBox type="checkbox" onClick={() => setNumbers(!numbers)} />
        <Label>Include Numbers</Label>
      </SingleWrapper>
      <SingleWrapper>
        <CheckBox type="checkbox" onClick={() => setSymbols(!symbols)} />
        <Label>Include Symbols</Label>
      </SingleWrapper>
    </Wrapper>
  );
};

export default CheckBoxes;
