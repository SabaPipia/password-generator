import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;
export const CheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  background-color: #24232c;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  margin-right: 8px;
  &:checked {
    background-color: #a4ffaf;
    border: none;
  }
  &:checked::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    filter: invert(100%);
  }
  &:hover {
    border-color: #a4ffaf;
  }
`;
export const Label = styled.h3`
  color: #ffff;
  font-size: 17px;
`;
