import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import AuthInput from "@/components/common/InputField/Text/AuthInput";
import CustomButton from "@/components/common/Button/CustomButton";
import { Link } from "react-router-dom";
import KakaoLogin from "@/components/common/Button/KakaoLogin";

function Login() {
  return (
    <>
      <Container>
        <ImageWrapper className="logo" src={Logo} />

        <AuthInput label="이메일" name="email" type="email" />
        <AuthInput label="비밀번호" name="password" type="password" />

        <CustomButton size="large" variant="contained">
          로그인
        </CustomButton>
        <KakaoLogin></KakaoLogin>
        <LinkWrapper className="b1">
          계정이 없으신가요?{" "}
          <Link to="/signup">
            <span className="signup b1">회원가입 하러가기</span>
          </Link>
        </LinkWrapper>
      </Container>
    </>
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
