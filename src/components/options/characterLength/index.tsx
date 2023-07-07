import React, { useState } from "react";

import { SliderInput, SliderHeader, Header, Count } from "./style";

function CharacterLength() {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
  };
  return (
    <div>
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
        />
      </>
    </div>
  );
}

export default CharacterLength;
