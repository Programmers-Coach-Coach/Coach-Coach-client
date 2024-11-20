import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { queryClient } from "./api/queryClient";
import Layout from "./components/layout/Layout";
import Coach from "./pages/Coach";
import CoachList from "./pages/CoachList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Notification from "./pages/Notification";
import Record from "./pages/Record";
import RecordDatail from "./pages/RecordDatail";
import CoachRoutine from "./pages/Routine/CoachRoutine";
import MemberRoutine from "./pages/Routine/MemberRoutine";
import Signup from "./pages/Signup";
import { GlobalStyle } from "./style/global";
import { theme } from "./style/theme";
import Routine from "./pages/Routine/Routine";
import First from "./pages/First";
import TotalLogin from "./pages/TotalLogin";
import AddRoutine from "./pages/Routine/AddRoutine";
import Profile from "./pages/Profile";
import MyMember from "./pages/Routine/MyMember";
import Chat from "./pages/Chat";
import ChatMessage from "./components/chat/ChatMessage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <First />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/total-login",
          element: <TotalLogin />
        },
        {
          path: "home",
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
        },
        {
          path: "routine",
          element: <Routine />
        },
        {
          path: "routine/add",
          element: <AddRoutine />
        },
        {
          path: "member",
          element: <MyMember />
        },
        {
          path: "/member/routine",
          element: <MemberRoutine />
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
          path: "routine/my-coach/:coachId",
          element: <CoachRoutine />
        },
        { path: "chat", element: <Chat /> },
        { path: "chat-room", element: <ChatMessage /> }
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
