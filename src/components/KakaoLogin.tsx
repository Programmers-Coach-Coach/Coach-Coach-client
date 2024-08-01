// KakaoLogin.tsx
import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";
import image from "../assets/images/kakao-login.png";
import { theme } from "../style/theme";

// Styled Button 컴포넌트
const KakaoButton = styled(Button)<ButtonProps>(() => ({
  width: "314px",
  height: "48px",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: `${theme.borderRadius.default}`,
  textTransform: "none",
  "&:hover": {
    backgroundImage: `url(${image})`,
    backgroundColor: "transparent"
  },
  "& .MuiButton-label": {
    color: "transparent"
  }
}));

const KakaoLogin: React.FC<ButtonProps> = (props) => {
  return <KakaoButton {...props}></KakaoButton>;
};

export default KakaoLogin;
