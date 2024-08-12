import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import SignupForm from "@/components/signup/SignupForm";

export const Signup = () => {
  return (
    <Container>
      <ImageWrapper className="logo" src={Logo} />
      <SignupForm />
      <LinkWrapper>
        계정이 있으신가요?{" "}
        <Link to="/auth/login">
          <span className="login">로그인 하러가기</span>
        </Link>
      </LinkWrapper>
    </Container>
  );
};

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
  box-sizing: border-box;
  gap: 10px;
`;

const ImageWrapper = styled.img`
  width: 50%;
`;

const LinkWrapper = styled.div`
  a {
    text-decoration: none;
  }
  .login {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }
  color: ${({ theme }) => theme.color.text};
  margin-top: 10px;
`;
