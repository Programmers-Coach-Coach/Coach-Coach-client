import { TextField } from "@mui/material";
import styled from "styled-components";

interface AuthInputProps {
  label: string;
  name: string;
  helperText?: string;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <InputContainer>
      <TextFieldWrapper
        label={props.label}
        required
        name={props.name}
        margin="normal"
        autoFocus
        helperText={props.helperText}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextFieldWrapper = styled(TextField)`
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
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.yellow};
    }
  }
  & .MuiInputBase-input::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
  & .MuiFormHelperText-root {
    color: red;
  }
  width: 60%;
  text-align: center;
`;

export default AuthInput;
