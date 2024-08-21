import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "@/components/common/Button/CustomButton";
import AuthInput from "@/components/common/InputField/Text/AuthInput";
import { ILogin } from "@/models/auth.model";
import useAuth from "@/hooks/useAuth";

const LoginForm = () => {
  const { control, handleSubmit } = useForm<ILogin>();
  const { userLogin } = useAuth();

  const onSubmit = (data: ILogin) => {
    userLogin(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <AuthInput
            {...field}
            label="이메일"
            name="email"
            type="email"
            placeholder="example@naver.com"
          />
        )}
      />
      <Controller
        name="password"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <AuthInput
            {...field}
            type="password"
            label="비밀번호"
            name="password"
            placeholder="비밀번호"
          />
        )}
      />

      <CustomButton size="large" variant="contained" type="submit">
        로그인
      </CustomButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export default LoginForm;
