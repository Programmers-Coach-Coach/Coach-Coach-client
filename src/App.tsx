import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import CenterModal from "./components/common/modal/centerModal/CenterModal";
import SubModal from "./components/common/modal/subModal/SubModal";
import FooterPicker from "./components/common/modal/subModal/contents/FooterPicker";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <CenterModal schema="coach-switch">
          트레이너로 전환하시겠어요?
        </CenterModal>
        <SubModal>
          <FooterPicker schema="profile" />
        </SubModal>
      </Container>
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
