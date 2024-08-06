import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import AuthInput from "@/components/common/InputField/Text/AuthInput";
import CustomButton from "@/components/common/Button/CustomButton";
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
  gap: 20px;
`;

const ImageWrapper = styled.img`
  width: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
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

const FlexContainer = styled.div`
  width: 314px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

function Signup() {
  return (
    <>
      <Container>
        <ImageWrapper className="logo" src={Logo} />
        <FlexContainer>
          <AuthInput
            label="닉네임"
            name="nickname"
            type="text"
            width="212px"
            placeholder="닉네임을 입력하세요"
          />
          <CustomButton size="small" variant="outlined">
            <span className="b2">중복확인</span>
          </CustomButton>
        </FlexContainer>
        <FlexContainer>
          <AuthInput
            label="이메일"
            name="email"
            type="email"
            width="212px"
            placeholder="example@naver.com"
          />
          <CustomButton size="small" variant="outlined">
            <span className="b2">중복확인</span>
          </CustomButton>
        </FlexContainer>
        <AuthInput
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <AuthInput
          label="비밀번호 확인"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
        />

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

export default Signup;
