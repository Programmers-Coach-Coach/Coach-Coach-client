import TextField from "@mui/material/TextField";
import React, { useState } from "react";

interface InputModalProp {
  name?: string;
  content: string;
  setFn: (value: string) => void;
}

const InputInModal = ({ name = "", content, setFn }: InputModalProp) => {
  const [inputValue, setInputValue] = useState<string>(name);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > 45) {
      setError(true);
    } else {
      setError(false);
      setInputValue(value);
      setFn(value);
    }
  };

  const placeholder = `${content}을 입력하세요.`;

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      id="fullWidth"
      value={inputValue}
      onChange={handleChange}
      error={error}
      helperText={error ? "최대 45자까지 입력 가능합니다." : ""}
      inputProps={{ maxLength: 45 }}
    />
  );
};

export default InputInModal;
