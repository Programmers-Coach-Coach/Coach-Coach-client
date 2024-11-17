import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "@/components/common/Button/CustomButton";
import { ILogin } from "@/models/auth.model";
import useAuth from "@/hooks/useAuth";
import lockIcon from "../../assets/images/lock-icon.svg";
import CommonInput from "../common/InputField/Text/CommonInput";
import emailIcon from "../../assets/images/email-icon.svg";
import checkIcon from "../../assets/images/check-icon.svg";
import checkedIcon from "../../assets/images/checked-icon.svg";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import googleIcon from "../../assets/images/google-icon.svg";
import kakaoIcon from "../../assets/images/kakao-image.svg";
const LoginForm = () => {
  const { control, handleSubmit, setValue } = useForm<ILogin>();
  const [rememberId, setRememberId] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
  const { userLogin } = useAuth();

  // 쿠키에 저장된 아이디가 있으면 input 필드에 설정
  useEffect(() => {
    if (cookies.rememberUserId) {
      setValue("email", cookies.rememberUserId);
      setRememberId(true);
    }
  }, [cookies, setValue]);

  const handleCheckboxChange = () => {
    setRememberId(!rememberId);
  };

  const onSubmit = (data: ILogin) => {
    if (rememberId) {
      setCookie("rememberUserId", data.email, {
        path: "/",
        maxAge: 7 * 24 * 60 * 60
      });
    } else {
      removeCookie("rememberUserId");
    }
    userLogin(data);
  };
  const handleGoogleLogin = () => {
    window.location.href =
      "https://coach-coach.site/oauth2/authorization/google";
  };

  const handleKakaoLogin = () => {
    window.location.href =
      "https://coach-coach.site/oauth2/authorization/kakao";
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CommonInput
            {...field}
            icon={emailIcon}
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요."
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CommonInput
            {...field}
            icon={lockIcon}
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        )}
      />
      <CheckBoxWrapper>
        <InputWrapper
          type="checkbox"
          id="chk"
          checked={rememberId}
          onChange={handleCheckboxChange}
        />
        <LabelWrapper htmlFor="chk">아이디 저장</LabelWrapper>
      </CheckBoxWrapper>

      <CustomButton size="large" variant="contained" type="submit">
        로그인
      </CustomButton>
      <ButtonGroupWrapper>
        <ButtonWrapper>
          <Button type="button" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google Icon" />
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button type="button" onClick={handleKakaoLogin}>
            <img src={kakaoIcon} alt="Kakao Icon" />
          </Button>
        </ButtonWrapper>
      </ButtonGroupWrapper>
    </FormWrapper>
  );
};
const ButtonGroupWrapper = styled.div`
  width: 342px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 160px;
  align-items: center;
  height: 42px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f222a;
  border: 1px solid #35383f;
  border-radius: 10px;
`;

const InputWrapper = styled.input`
  display: none;

  &:checked + label::before {
    background-image: url(${checkedIcon});
    background-size: 12px 9px;
  }
`;

const LabelWrapper = styled.label`
  position: relative;
  padding-left: 30px;
  font-size: 14px;
  color: #9ea3b2;
  cursor: pointer;
  display: flex;
  align-items: center;

  &::before {
    display: block;
    content: "";
    width: 22px;
    height: 22px;
    background-color: #252932;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${checkIcon});
    background-size: 12px 9px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 6px;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  margin-bottom: 60px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default LoginForm;
