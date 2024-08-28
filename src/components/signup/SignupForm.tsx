import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import AuthInput from "@/components/common/InputField/Text/AuthInput";
import CustomButton from "@/components/common/Button/CustomButton";
import { ISignup } from "@/models/auth.model";
import { AUTH_REGEX } from "@/constants/regex";
import useAuth from "@/hooks/useAuth";

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues
  } = useForm<ISignup>({ mode: "onChange" });

  const {
    userSignup,
    emailDuplication,
    nicknameDuplication,
    isEmailError,
    isNicknameError,
    emailChecked,
    nicknameChecked
  } = useAuth();

  const isButtonDisabled =
    !isValid ||
    isEmailError ||
    isNicknameError ||
    !emailChecked ||
    !nicknameChecked;

  const handleEmailDuplicate = () => {
    const email = getValues("email");
    emailDuplication({ email });
  };

  const handleNicknameDuplicate = () => {
    const nickname = getValues("nickname");
    nicknameDuplication({ nickname });
  };

  const onSubmit = (data: ISignup) => {
    const signupData = {
      nickname: data.nickname,
      email: data.email,
      password: data.password
    };
    userSignup(signupData);
  };

  return (
    <Container>
      <FlexContainer>
        <Controller
          name="nickname"
          control={control}
          rules={{
            required: "닉네임을 입력하세요",
            pattern: {
              value: AUTH_REGEX.nickname,
              message: "닉네임은 공백제외 2~10자입니다."
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
        <CustomButton
          size="small"
          variant="outlined"
          onClick={handleNicknameDuplicate}
        >
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
              value: AUTH_REGEX.email,
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
        <CustomButton
          size="small"
          variant="outlined"
          onClick={handleEmailDuplicate}
        >
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
            value: AUTH_REGEX.password,
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
          validate: (value: string | undefined) => {
            if (!value) return "비밀번호 확인을 입력하세요";
            return (
              value === getValues("password") || "비밀번호가 일치하지 않습니다."
            );
          }
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
        disabled={isButtonDisabled}
      >
        가입하기
      </CustomButton>
    </Container>
  );
};

export default SignupForm;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
