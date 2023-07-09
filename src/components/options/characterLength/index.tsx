import React, { useState } from "react";

import { SliderInput, SliderHeader, Header, Count } from "./style";

function CharacterLength() {
  const [value, setValue] = useState<number>(0);
  const [bgPercentage, setBgPercentage] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    const backgroundPercentage = (newValue / 20) * 100;
    setBgPercentage(backgroundPercentage);
    setValue(newValue);
  };

  return (
    <>
      <SliderHeader>
        <Header>Character Length</Header>
        <Count>{value}</Count>
      </SliderHeader>
      <SliderInput
        type="range"
        min={0}
        max={20}
        value={value}
        onChange={handleChange}
        backgroundPerc={bgPercentage}
      />
    </>
  );
}

export default CharacterLength;
