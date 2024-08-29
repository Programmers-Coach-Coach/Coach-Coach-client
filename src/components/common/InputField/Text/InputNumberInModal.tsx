import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

interface InputModalProp {
  value?: number;
  content: string;
  setFn: (value: number) => void;
}

const InputNumberInModal = ({ value = 0, content, setFn }: InputModalProp) => {
  const [inputValue, setInputValue] = useState<number | string>(value);
  const [placeholder, setPlaceholder] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (input === "" || /^[0-9\b]+$/.test(input)) {
      const numericValue = input === "" ? 0 : Number(input);
      setInputValue(input === "" ? "" : numericValue);
      setFn(numericValue);
    }
  };

  useEffect(() => {
    if (content === "시간") {
      setPlaceholder("운동 시간을 입력하세요.");
    } else if (content === "횟수") {
      setPlaceholder("운동 횟수를 입력하세요.");
    } else if (content === "세트") {
      setPlaceholder("운동 세트를 입력하세요.");
    }
  }, [content, placeholder]);

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
