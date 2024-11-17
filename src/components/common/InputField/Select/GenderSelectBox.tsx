import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200
    }
  }
};

interface SelectBoxProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

const GenderSelectBox = ({ value, onChange }: SelectBoxProps) => {
  const gender = ["남성", "여성"];
  return (
    <FormControl sx={{ width: "70%" }}>
      <Select
        value={value}
        onChange={onChange}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        sx={{
          "& .MuiSelect-icon": {
            color: "#777c89" // 드롭다운 화살표 색상 변경
          },
          "&": {
            backgroundColor: "#252932",
            height: "36px",
            color: "#777c89",
            borderRadius: "10px"
          }
        }}
      >
        {gender.map((name: string) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              height: 30
            }}
          >
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenderSelectBox;
