import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "@/components/common/Button/CustomButton";
import { ISignup } from "@/models/auth.model";
import { AUTH_REGEX } from "@/constants/regex";
import useAuth from "@/hooks/useAuth";
import lockIcon from "../../assets/images/lock-icon.svg";
import CommonInput from "../common/InputField/Text/CommonInput";
import emailIcon from "../../assets/images/email-icon.svg";
import userIcon from "../../assets/images/user-icon.svg";
import toast from "react-hot-toast";
import successSignupIcon from "../../assets/images/signup-success-icon.svg";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<ISignup>({ mode: "onChange" });

  const {
    userSignup,
    emailDuplication,
    nicknameDuplication,
    emailChecked,
    nicknameChecked,
    step
  } = useAuth();

  const navigate = useNavigate();

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
    if (!emailChecked) {
      toast.error("이메일 중복 확인을 해주세요.");
      return;
    }

    if (!nicknameChecked) {
      toast.error("닉네임 중복 확인을 해주세요.");
      return;
    }

    userSignup(signupData);
  };

  const { width, height } = useWindowSize();

  return (
    <>
      {step === "가입" ? (
        <Container>
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
                <CommonInput
                  {...field}
                  icon={emailIcon}
                  label="이메일"
                  type="email"
                  placeholder="이메일을 입력해 주세요."
                />
              )}
            />
            <ButtonWrapper>
              <CustomButton
                size="mini"
                variant="outlined"
                onClick={handleEmailDuplicate}
              >
                <span className="b2">중복확인</span>
              </CustomButton>
            </ButtonWrapper>
          </FlexContainer>
          <ErrorText className="b2">{errors.email?.message ?? ""}</ErrorText>

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
                <CommonInput
                  {...field}
                  icon={userIcon}
                  label="닉네임"
                  type="text"
                  placeholder="닉네임을 입력해 주세요."
                />
              )}
            />
            <ButtonWrapper>
              <CustomButton
                size="mini"
                variant="outlined"
                onClick={handleNicknameDuplicate}
              >
                <span className="b2">중복확인</span>
              </CustomButton>
            </ButtonWrapper>
          </FlexContainer>
          <ErrorText className="b2">{errors.nickname?.message ?? ""}</ErrorText>

          <FlexContainer>
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
                <CommonInput
                  {...field}
                  icon={lockIcon}
                  label="비밀번호"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
              )}
            />
          </FlexContainer>
          <ErrorText className="b2">{errors.password?.message ?? ""}</ErrorText>
          <FlexContainer>
            <Controller
              name="passwordCheck"
              control={control}
              rules={{
                required: "비밀번호 확인을 입력하세요",
                validate: (value: string | undefined) => {
                  if (!value) return "비밀번호 확인을 입력하세요";
                  return (
                    value === getValues("password") ||
                    "비밀번호가 일치하지 않습니다."
                  );
                }
              }}
              render={({ field }) => (
                <CommonInput
                  {...field}
                  icon={lockIcon}
                  label="비밀번호"
                  type="password"
                  placeholder="비밀번호를 다시 입력해 주세요."
                />
              )}
            />
          </FlexContainer>

          <ErrorText className="b2">
            {errors.passwordCheck?.message ?? ""}
          </ErrorText>

          <ButtonContainer>
            <CustomButton
              size="large"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              가입하기
            </CustomButton>
          </ButtonContainer>
        </Container>
      ) : (
        <>
          {/* 폭죽 효과에 width와 height 값을 전달하여 화면 전체에 나타나게 함 */}
          <Confetti width={width} height={height} />
          <SuccessWrapper>
            <UpperWrapper>
              <ImageWrapper src={successSignupIcon} />
              <ContentWrapper>
                <div style={{ fontSize: "23px" }}>회원가입이</div>
                <div style={{ fontSize: "23px" }}>완료되었습니다.</div>
              </ContentWrapper>
            </UpperWrapper>
            <CustomButton
              size="large"
              variant="contained"
              onClick={() => navigate("/login")}
            >
              로그인
            </CustomButton>
          </SuccessWrapper>
        </>
      )}
    </>
  );
};

export default SignupForm;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;
const ImageWrapper = styled.img`
  width: 162px;
  height: 162px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FlexContainer = styled.div`
  width: 342px;
  position: relative;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const ErrorText = styled.div`
  color: red;
  text-align: left;
  width: 314px;
`;
