import TextField from "@mui/material/TextField";

interface InputModalProp {
  name: string;
  content: string;
  setFn: (value: string) => void;
}

const InputInModal = ({ name, content, setFn }: InputModalProp) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFn(event.target.value);
  };

  const placeholder = `${content}을 입력하세요.`;

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      id="fullWidth"
      value={name}
      onChange={handleChange}
    />
  );
};

export default InputInModal;
