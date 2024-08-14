import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "@/components/common/Button/CustomButton";
import AuthInput from "@/components/common/InputField/Text/AuthInput";
import { ICheckPassword, ILogin } from "@/models/auth.model";
import useAuth from "@/hooks/useAuth";

const CheckPassword = () => {
  const { control, handleSubmit } = useForm<ILogin>();
  const { passwordCheck } = useAuth();

  const onSubmit = (data: ICheckPassword) => {
    passwordCheck(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="password"
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
        확인
      </CustomButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export default CheckPassword;
