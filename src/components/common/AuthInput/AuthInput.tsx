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
  width: 100%; /* Ensure container takes full width */
`;

const TextFieldWrapper = styled(TextField)<{ width?: string }>`
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
  & .MuiFormHelperText-root {
    color: red;
  }
  width: ${({ width }) => width || "314px"};
  text-align: center;
  &.css-1rv3ei8-MuiFormControl-root-MuiTextField-root {
    margin-top: 0;
  }
`;

export default AuthInput;
