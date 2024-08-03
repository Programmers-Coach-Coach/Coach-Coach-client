import { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

export type AuthInputProps = {
  width?: string;
} & TextFieldProps;

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>((props, ref) => {
  const { width, ...rest } = props;

  return (
    <Container>
      <InputContainer>
        <TextFieldWrapper width={width} inputRef={ref} {...rest} />
      </InputContainer>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextFieldWrapper = styled(TextField)<{ width?: string }>`
  width: ${({ width }) => width || "314px"};
  & .MuiInputBase-input {
    color: ${({ theme }) => theme.color.white};
  }
  & .MuiFormLabel-root {
    color: ${({ theme }) => theme.color.white};
  }
  & .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.color.yellow};
  }
  & .MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.white};
      transition: border-color 0.5s ease;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.white};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.yellow};
    }
  }
  & .MuiInputBase-input::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default AuthInput;
