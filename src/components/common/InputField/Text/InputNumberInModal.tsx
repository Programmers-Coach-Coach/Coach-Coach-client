import TextField from "@mui/material/TextField";

interface InputModalProp {
  content: string;
  setFn: (value: number) => void;
}

const InputNumberInModal = ({ content, setFn }: InputModalProp) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFn(Number(event.target.value));
  };

  const placeholder = `${content}을 입력하세요. 숫자만 입력가능합니다.`;

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      id="fullWidth"
      type="number"
      onChange={handleChange}
    />
  );
};

export default InputNumberInModal;
