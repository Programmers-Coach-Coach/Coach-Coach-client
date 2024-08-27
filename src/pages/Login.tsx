import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "@/components/login/LoginForm";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

function Login() {
  const { isLoggedIn } = useAuthStore();
  const nav = useNavigate();
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      nav("/");
    }
  });
  return (
    <Container>
      <ImageWrapper className="logo" src={Logo} alt="Logo" />
      <LoginForm />
      <LinkWrapper className="b1">
        계정이 없으신가요?{" "}
        <Link to="/signup">
          <span className="signup b1">회원가입 하러가기</span>
        </Link>
      </LinkWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 80px;
  box-sizing: border-box;
  gap: 15px;
`;

const ImageWrapper = styled.img`
  width: 314px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.div`
  margin-top: 10px;
  a {
    text-decoration: none;
  }
  .signup {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }
`;
export default Login;
