import { TextField } from "@mui/material";
import { forwardRef } from "react";
import styled from "styled-components";

interface AuthInputProps {
  placeholder: string;
  label: string;
  name: string;
  type: string;
  helperText?: string;
  width?: string;
}
const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>((props, ref) => {
  return (
    <TextFieldWrapper helperText={props.helperText} {...props} inputRef={ref} />
  );
});

const TextFieldWrapper = styled(TextField)<{ width?: string }>`
  && {
    margin: 0;
  }
  & .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.color.primary};
  }

  & .MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
      transition: border-color 0.5s ease;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.primary};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.primary};
    }
  }
  & .MuiInputBase-input::placeholder {
    color: ${({ theme }) => theme.color.text};
  }
  & .MuiFormHelperText-root {
    color: ${({ theme }) => theme.color.error};
  }
  width: ${({ width }) => width || "314px"};
  text-align: center;
  &.css-1rv3ei8-MuiFormControl-root-MuiTextField-root {
    margin-top: 0;
  }
`;
export default AuthInput;
