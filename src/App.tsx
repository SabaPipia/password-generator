import styled, { createGlobalStyle } from "styled-components";

import Container from "./components/container";
function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container />
      </Wrapper>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');
  * {
    margin: 0;
    padding: 0;
  }
  body{
    background: #18171F;
    font-family: "JetBrains Mono", monospace;
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
