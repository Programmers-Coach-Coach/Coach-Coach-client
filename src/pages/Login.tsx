import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/login/LoginForm";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

function Login() {
  const nav = useNavigate();

  useEffect(() => {
    const unsubscribe = useAuthStore.subscribe((state) => {
      if (state.isLoggedIn) {
        nav("/home");
      }
    });
    return () => unsubscribe();
  }, [nav]);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 76px); //헤더 길이만큼 제외
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 15px;
`;

export default Login;
