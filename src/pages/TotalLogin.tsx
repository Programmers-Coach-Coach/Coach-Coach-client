import styled from "styled-components";
import googleIcon from "../assets/images/google-icon.svg";
import kakaoIcon from "../assets/images/kakao-image.svg";
import CustomButton from "@/components/common/Button/CustomButton";
import { Link, useNavigate } from "react-router-dom"; // useNavigate를 가져옵니다
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import LogoImage from "../assets/images/logo.svg";

const TotalLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = useAuthStore.subscribe((state) => {
      if (state.isLoggedIn) {
        navigate("/home");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "https://api.coach-coach.site/oauth2/authorization/google";
  };

  const handleKakaoLogin = () => {
    window.location.href =
      "https://api.coach-coach.site/oauth2/authorization/kakao";
  };
  return (
    <Container>
      <ImageWrapper src={LogoImage} />
      <ButtonGroupWrapper>
        <ButtonWrapper>
          <Button onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google Icon" />
            구글 로그인
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={handleKakaoLogin}>
            <img src={kakaoIcon} alt="Kakao Icon" />
            카카오 로그인
          </Button>
        </ButtonWrapper>
      </ButtonGroupWrapper>
      <CustomLoginButton
        size="full"
        variant="contained"
        type="submit"
        onClick={handleLoginClick}
      >
        로그인
      </CustomLoginButton>
      <LinkWrapper className="b1">
        아직 회원이 아니신가요?
        <Link to="/signup">
          <span className="signup"> 회원가입</span>
        </Link>
      </LinkWrapper>
    </Container>
  );
};

const LinkWrapper = styled.div`
  color: #92a3be;
  font-size: 14px;
  .signup {
    color: ${({ theme }) => theme.color.primary};
    font-size: 14px;
  }
`;

const ButtonGroupWrapper = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (max-width: 380px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f222a;
  border: 1px solid #35383f;
  border-radius: 10px;

  @media (max-width: 380px) {
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342px;
  height: 60px;
  border: none;
  gap: 20px;
  color: white;
  font-size: 16px;

  @media (max-width: 380px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 342px;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 380px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.img`
  width: 162px;
  height: 162px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 118px 0;
`;

const CustomLoginButton = styled(CustomButton)`
  && {
    font-size: 18px;
    margin-top: 70px;
    margin-bottom: 64px;
  }
`;

export default TotalLogin;
