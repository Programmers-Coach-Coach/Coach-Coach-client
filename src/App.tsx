import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />
  },
  {
    path: "/detail",
    element: (
      <Layout title="Detail">
        <Detail />
      </Layout>
    ),
    errorElement: <Error />
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
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
