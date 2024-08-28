import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface InputModalProp {
  name?: string;
  content: string;
  setFn: (value: string) => void;
}

const InputInModal = ({ name = "", content, setFn }: InputModalProp) => {
  const [inputValue, setInputValue] = useState<string>(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setFn(value);
  };

  const placeholder = `${content}을 입력하세요.`;

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      id="fullWidth"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputInModal;
