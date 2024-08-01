import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "detail",
        element: <Detail />
      },
      {
        path: "login",
        element: <Detail />
      },
      {
        path: "signup",
        element: <Signup />
    ]
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
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background};
  font-family: "Pretendard", sans-serif;
`;

export default App;
