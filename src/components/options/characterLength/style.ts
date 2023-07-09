import styled from "styled-components";

export const SliderInput = styled.input<{ backgroundPerc?: number }>`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: (#333);
  accent-color: #fff;
  cursor: pointer;
  height: 8px;
  background-image: linear-gradient(#a4ffaf, #a4ffaf);
  background-size: ${(props) =>
      props.backgroundPerc ? `${props.backgroundPerc}%` : "0%"}
    100%;
  background-repeat: no-repeat;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 28px;
    width: 28px;
    background-color: #fff;
    border-radius: 14px;
  }
  &:hover::-webkit-slider-thumb {
    background: #222;
    border: 2px solid #a4ffaf;
    -webkit-appearance: none;
  }
`;
export const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;
export const Header = styled.h4`
  color: RGB(204, 204, 204);
  font-weight: 100;
`;
export const Count = styled.h3`
  color: #a4ffaf;
  font-size: 22px;
`;
