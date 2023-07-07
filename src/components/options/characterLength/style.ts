import styled from "styled-components";

export const SliderInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 4px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: goldenrod;
    cursor: pointer;
    transition: background 0.2s ease;
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
