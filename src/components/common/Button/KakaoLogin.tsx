import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";
import kakao from "@/assets/images/kakaoLogin.png";

const KakaoButton = styled(Button)<ButtonProps>(() => ({
  width: "314px",
  height: "48px",
  backgroundImage: `url(${kakao})`,
  backgroundSize: "314px",
  backgroundPosition: "center",
  borderRadius: "20px",
  "&:hover": {
    borderRadius: "20px"
  }
}));

const KakaoLogin = () => {
  return <KakaoButton></KakaoButton>;
};

export default KakaoLogin;
