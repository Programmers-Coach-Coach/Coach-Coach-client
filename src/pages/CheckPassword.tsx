import { useForm, Controller, FieldErrors } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "@/components/common/Button/CustomButton";
import { ICheckPassword } from "@/models/auth.model";
import toast from "react-hot-toast";
import CommonInput from "@/components/common/InputField/Text/CommonInput";

interface CheckPasswordProps {
  onPasswordCheck: (data: ICheckPassword) => void;
}

const CheckPassword = ({ onPasswordCheck }: CheckPasswordProps) => {
  const { control, handleSubmit } = useForm<ICheckPassword>();

  const onSubmit = (data: ICheckPassword) => {
    onPasswordCheck(data);
  };

  const onInvalid = (errors: FieldErrors<ICheckPassword>) => {
    if (errors.password) {
      toast.error("비밀번호를 입력해주세요");
    }
  };

  return (
    <Container>
      <SubtitleWrapper>본인확인</SubtitleWrapper>
      <ContentWrapper>
        개인정보보호를 위해 본인확인을 진행합니다.
      </ContentWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <CommonInput
              {...field}
              inputHeight="60px"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          )}
        />
        <CustomButton size="large" variant="contained" type="submit">
          확인
        </CustomButton>
      </FormWrapper>
    </Container>
  );
};

const SubtitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t1.fontSize};
  font-weight: ${({ theme }) => theme.titleSize.t1.bold};
`;

const ContentWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default CheckPassword;
