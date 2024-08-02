import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";
import kakao from "@/assets/images/kakaoLogin.png";
import { theme } from "../../../style/theme";

const KakaoButton = styled(Button)<ButtonProps>(() => ({
  width: "314px",
  height: "48px",
  backgroundImage: `url(${kakao})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: `${theme.borderRadius.default}`,
  textTransform: "none",
  "&:hover": {
    backgroundImage: `url(${kakao})`,
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
