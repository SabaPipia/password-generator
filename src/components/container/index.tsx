import styled from "styled-components";
import InputField from "../inputField";
import CharacterLength from "../options/characterLength";
import CheckBoxes from "../options/checkBoxes";
import Strength from "../options/strength";
import Btn from "../button";
import { useState } from "react";

function Container() {
  const [value, setValue] = useState<number>(0);
  const [password, setPassword] = useState("");
  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = () => {
    let characters = "";

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolsChars = "!@#$%^&*-_+=?";
    const numbersChars = "0123456789";

    if (uppercase === true) {
      characters += upperChars;
    }
    if (lowercase === true) {
      characters += lowerChars;
    }
    if (numbers === true) {
      characters += numbersChars;
    }
    if (symbols === true) {
      characters += symbolsChars;
    }
    let psw = "";
    for (let i = 0; i < value; i++) {
      const letter = Math.floor(Math.random() * characters.length);
      psw += characters.charAt(letter);
    }
    setPassword(psw);
  };
  return (
    <Wrapper>
      <InputField
        password={password}
        isCopied={isCopied}
        setIsCopied={setIsCopied}
      />
      <ContainerDiv>
        <CharacterLength value={value} setValue={setValue} />
        <CheckBoxes
          setUpperCase={setUpperCase}
          setLowercase={setLowercase}
          setNumbers={setNumbers}
          setSymbols={setSymbols}
          uppercase={uppercase}
          lowercase={lowercase}
          numbers={numbers}
          symbols={symbols}
        />
        <Strength />
        <Btn generatePassword={generatePassword} setIsCopied={setIsCopied} />
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
