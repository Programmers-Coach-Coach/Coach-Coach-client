import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { queryClient } from "./api/queryClient";
import Layout from "./components/layout/Layout";
import PrivateLayout from "./components/layout/PrivateLayout";
import CheckPassword from "./pages/CheckPassword";
import Coach from "./pages/Coach";
import CoachList from "./pages/CoachList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageMember from "./pages/ManageMember";
import MyCoach from "./pages/MyCoach";
import Mypage from "./pages/Mypage";
import Notification from "./pages/Notification";
import Record from "./pages/Record";
import RecordDatail from "./pages/RecordDatail";
import CoachRoutine from "./pages/Routine/CoachRoutine";
import MemberRoutine from "./pages/Routine/MemberRoutine";
import MyRoutine from "./pages/Routine/MyRoutine";
import Signup from "./pages/Signup";
import { GlobalStyle } from "./style/global";
import { theme } from "./style/theme";

function App() {
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
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
          element: (
            <PrivateLayout isAccess={isPasswordConfirmed}>
              <Mypage />
            </PrivateLayout>
          )
        },
        {
          path: "coach-list",
          element: <CoachList />
        },
        {
          path: "routine",
          element: <MyRoutine />
        },
        {
          path: "check-password",
          element: (
            <CheckPassword
              onPasswordConfirmed={() => setIsPasswordConfirmed(true)}
            />
          )
        },
        {
          path: "record",
          element: <RecordDatail />
        },
        {
          path: "record-list",
          element: <Record />
        },
        {
          path: "coach/:id",
          element: <Coach />
        },
        {
          path: "notification",
          element: <Notification />
        },
        {
          path: "routine/my-coach",
          element: <MyCoach />
        },
        {
          path: "routine/my-coach/:coachId",
          element: <CoachRoutine />
        },
        {
          path: "manage",
          element: <ManageMember />
        },
        {
          path: "routine/member/:userId",
          element: <MemberRoutine />
        }
      ]
    }
  ]);

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
