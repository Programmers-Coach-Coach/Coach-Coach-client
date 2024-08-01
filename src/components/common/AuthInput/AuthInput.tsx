import { TextField } from "@mui/material";
import styled from "styled-components";

interface AuthInputProps {
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
        required
        name={props.name}
        margin="normal"
        autoFocus
        type={props.type}
        helperText={props.helperText}
        width={props.width}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextFieldWrapper = styled(TextField)<{ width?: string }>`
  & .MuiInputBase-input {
    color: white;
  }
  & .MuiFormLabel-root {
    color: white;
  }
  & .MuiFormLabel-root.Mui-focused {
    color: yellow;
  }
  & .MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: yellow;
    }
  }
  & .MuiInputBase-input::placeholder {
    color: white;
  }
  & .MuiFormHelperText-root {
    color: red;
  }
  width: ${({ width }) => width || "314px"};
  text-align: center;
`;

export default AuthInput;
