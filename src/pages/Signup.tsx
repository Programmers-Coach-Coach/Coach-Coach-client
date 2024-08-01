import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import AuthInput from "@/components/common/AuthInput/AuthInput";
import CustomButton from "@/components/common/CustomButton";
import { Link } from "react-router-dom";
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
`;

const ImageWrapper = styled.img`
  width: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.div`
  .login {
    color: ${({ theme }) => theme.color.yellow};
    text-decoration: none;
  }
  color: white;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 314px;
`;

function Login() {
  return (
    <>
      <Container>
        <ImageWrapper className="logo" src={Logo} />
        <FlexContainer>
          <AuthInput label="닉네임" name="nickname" type="text" width="212px" />
          <CustomButton size="small" variant="outlined">
            중복확인
          </CustomButton>
        </FlexContainer>
        <FlexContainer>
          <AuthInput label="이메일" name="email" type="email" width="212px" />
          <CustomButton size="small" variant="outlined">
            중복확인
          </CustomButton>
        </FlexContainer>
        <AuthInput label="비밀번호" name="password" type="password" />
        <AuthInput label="비밀번호 확인" name="passwordCheck" type="password" />

        <CustomButton size="large" variant="contained">
          가입하기
        </CustomButton>

        <LinkWrapper>
          계정이 있으신가요?{" "}
          <Link to="/auth/signup">
            <span className="login">로그인 하러가기</span>
          </Link>
        </LinkWrapper>
      </Container>
    </>
  );
}

export default Login;
