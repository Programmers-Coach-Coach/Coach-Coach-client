import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import AuthInput from "@/components/common/InputField/Text/AuthInput";
import CustomButton from "@/components/common/Button/CustomButton";
import { Link } from "react-router-dom";
import { SignupProps } from "@/models/auth.model";

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

const FlexContainer = styled.div`
  width: 314px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const ErrorText = styled.div`
  color: red;
  text-align: left;
  width: 314px;
`;

const NICKNAME_REGEX =
  /^(?!.*\s{2,})([0-9a-zA-Z가-힣][0-9a-zA-Z가-힣\s]{0,8}[0-9a-zA-Z가-힣])$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<SignupProps>({ mode: "onBlur" });

  const onSubmit = (data: SignupProps) => {
    const signupData = {
      nickname: data.nickname,
      email: data.email,
      password: data.password
    };

    userSignup(signupData);
  };

  return (
    <Container>
      <ImageWrapper className="logo" src={Logo} />
      <FlexContainer>
        <Controller
          name="nickname"
          control={control}
          rules={{
            required: "닉네임을 입력하세요",
            pattern: {
              value: NICKNAME_REGEX,
              message: "닉네임은 공백제외 1~10자입니다."
            }
          }}
          render={({ field }) => (
            <AuthInput
              {...field}
              label="닉네임"
              type="text"
              width="212px"
              placeholder="닉네임을 입력하세요"
            />
          )}
        />
        <CustomButton size="small" variant="outlined">
          <span className="b2">중복확인</span>
        </CustomButton>
      </FlexContainer>
      <ErrorText className="b2">{errors.nickname?.message ?? ""}</ErrorText>

      <FlexContainer>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "이메일을 입력하세요",
            pattern: {
              value: EMAIL_REGEX,
              message: "올바른 이메일 주소를 입력하세요."
            }
          }}
          render={({ field }) => (
            <AuthInput
              {...field}
              label="이메일"
              type="email"
              width="212px"
              placeholder="example@naver.com"
            />
          )}
        />
        <CustomButton size="small" variant="outlined">
          <span className="b2">중복확인</span>
        </CustomButton>
      </FlexContainer>
      <ErrorText className="b2">{errors.email?.message ?? ""}</ErrorText>

      <Controller
        name="password"
        control={control}
        rules={{
          required: "비밀번호를 입력하세요",
          pattern: {
            value: PASSWORD_REGEX,
            message: "비밀번호는 숫자, 특수문자 포함 8~20자입니다."
          }
        }}
        render={({ field }) => (
          <AuthInput
            {...field}
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
          />
        )}
      />
      <ErrorText className="b2">{errors.password?.message ?? ""}</ErrorText>

      <Controller
        name="passwordCheck"
        control={control}
        rules={{
          required: "비밀번호 확인을 입력하세요",
          validate: (value: string) =>
            value === getValues("password") || "비밀번호가 일치하지 않습니다."
        }}
        render={({ field }) => (
          <AuthInput
            {...field}
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호 확인"
          />
        )}
      />
      <ErrorText className="b2">
        {errors.passwordCheck?.message ?? ""}
      </ErrorText>

      <CustomButton
        size="large"
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        가입하기
      </CustomButton>

      <LinkWrapper>
        계정이 있으신가요?{" "}
        <Link to="/auth/login">
          <span className="login">로그인 하러가기</span>
        </Link>
      </LinkWrapper>
    </Container>
  );
}

export default Signup;
