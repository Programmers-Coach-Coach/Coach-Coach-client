import { TextField } from "@mui/material";
import styled from "styled-components";

interface AuthInputProps {
  placeholder: string;
  label: string;
  name: string;
  type?: string;
  helperText?: string;
  width?: string;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <InputContainer>
      <TextFieldWrapper
        label={props.label}
        type={props.type}
        helperText={props.helperText}
        width={props.width}
        name={props.name}
        placeholder={props.placeholder}
        margin="normal"
        required
        autoFocus
        multiline
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; /* Ensure container takes full width */
`;

const TextFieldWrapper = styled(TextField)<{ width?: string }>`
  & .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.color.primary};
  }
  & .MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
      transition: border-color 0.5s ease;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.box};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.primary};
    }
  }
  & .MuiInputBase-input::placeholder {
    color: ${({ theme }) => theme.color.box};
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
