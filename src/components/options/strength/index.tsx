import React, { useEffect, useState } from "react";

import {
  Header,
  RightPart,
  StrengthIndicator,
  StrengthMessage,
  Wrap,
  Wrapper,
} from "./style";

interface StrengthProps {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  password: string;
}

const Strength: React.FC<StrengthProps> = ({
  uppercase,
  lowercase,
  numbers,
  symbols,
  password,
}) => {
  const [strength, setStrength] = useState("");

  useEffect(() => {
    const calculateStrength = () => {
      if (
        // prettier-ignore
        password.length >= 10 && uppercase && lowercase && numbers ||
        password.length >= 10 && uppercase && lowercase  && symbols
      ) {
        setStrength("STRONG");
      } else if (password.length >= 8) {
        setStrength("MEDIUM");
      } else if (password.length >= 5) {
        setStrength("WEAK");
      } else if (password.length < 5 && password.length > 0) {
        setStrength("TOO WEAK!");
      } else {
        setStrength("");
      }
    };
    calculateStrength();
  }, [password, lowercase, uppercase, numbers, symbols]);
  return (
    <Wrapper>
      <Header>Strength</Header>
      <RightPart>
        <StrengthMessage>{password ? strength : null}</StrengthMessage>
        <Wrap>
          <StrengthIndicator strength={strength} />
          <StrengthIndicator strength={strength} />
          <StrengthIndicator strength={strength} />
          <StrengthIndicator strength={strength} />
        </Wrap>
      </RightPart>
    </Wrapper>
  );
};

export default Strength;
