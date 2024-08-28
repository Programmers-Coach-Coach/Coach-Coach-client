import TextField from "@mui/material/TextField";
import { useState } from "react";

interface InputModalProp {
  value?: number;
  content: string;
  setFn: (value: number) => void;
}

const InputNumberInModal = ({ value = 0, content, setFn }: InputModalProp) => {
  const [inputValue, setInputValue] = useState<number | string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (input === "" || /^[0-9\b]+$/.test(input)) {
      const numericValue = input === "" ? 0 : Number(input);
      setInputValue(input === "" ? "" : numericValue);
      setFn(numericValue);
    }
  };

  const placeholder = `${content}을 입력하세요.`;

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={inputValue === 0 ? "" : inputValue}
      id="fullWidth"
      onChange={handleChange}
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        maxLength: 3
      }}
    />
  );
};

export default InputNumberInModal;
