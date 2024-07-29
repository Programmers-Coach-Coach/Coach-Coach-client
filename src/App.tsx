import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/global";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>Test</Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  padding: 0;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background};
  font-family: "Pretendard", sans-serif;
`;

export default App;
