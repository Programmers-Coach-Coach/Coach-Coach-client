import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";

interface InputModalProp {
  name?: string;
  content: string;
  setFn: (value: string) => void;
}

const InputInModal = ({ name = "", content, setFn }: InputModalProp) => {
  const [inputValue, setInputValue] = useState<string>(name);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const textLimit = content === "운동 가이드" ? 29 : 12;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > textLimit) {
      setError(true);
    } else {
      setError(false);
      setInputValue(value);
      setFn(value);
    }
  };

  useEffect(() => {
    if (content === "루틴") {
      setPlaceholder("루틴 이름을 입력하세요.");
    } else if (content === "카테고리") {
      setPlaceholder("카테고리 이름을 입력하세요.");
    } else if (content === "운동") {
      setPlaceholder("운동 이름을 입력하세요.");
    } else if (content === "운동 가이드") {
      setPlaceholder("운동 가이드를 입력하세요.");
    }
  }, [content, placeholder]);

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      id="fullWidth"
      value={inputValue}
      onChange={handleChange}
      error={error}
      helperText={error ? `최대 ${textLimit}자까지 입력 가능합니다` : ""}
      inputProps={{ maxLength: textLimit }}
    />
  );
};

export default InputInModal;
