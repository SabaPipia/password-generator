import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #18171f;
  padding: 20px 15px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Header = styled.h3`
  color: #817d92;
  font-size: 16px;
  width: 70%;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;
export const RightPart = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
export const StrengthMessage = styled.h2`
  font-size: 15px;
  color: #fff;
`;
export const Wrap = styled.div`
  display: flex;
`;
export const StrengthIndicator = styled.div<{ strength: string }>`
  border: 1px solid #fff;
  width: 8px;
  margin-left: 3px;
  display: flex;
  ${(props) => {
    switch (props.strength) {
      case "STRONG":
        return {
          backgroundColor: "#a4ffaf",
          borderColor: "#a4ffaf",
        };
      case "MEDIUM":
        return {
          backgroundColor: "#f8cd65",
          borderColor: "#f8cd65",
        };
      case "WEAK":
        return {
          backgroundColor: "#fb7c58",
          borderColor: "#fb7c58",
        };
      case "TOO WEAK!":
        return {
          backgroundColor: "#f64a4a",
          borderColor: "#f64a4a",
        };
      case "":
        return {
          backgroundColor: "#18171f",
          borderColor: "#fff",
        };
      default:
        return "background-color: #18171f";
    }
  }};
`;
