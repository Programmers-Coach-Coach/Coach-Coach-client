import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import Mypage from "./pages/Mypage";
import { Toaster } from "react-hot-toast";
import CoachList from "./pages/CoachList";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "mypage",
        element: <Mypage />
      },
      {
        path: "coach-list",
        element: <CoachList />
      }
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Toaster />
        <GlobalStyle />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

const Container = styled.div`
  padding: 0;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background};
`;

export default App;
