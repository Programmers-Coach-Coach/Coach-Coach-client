import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { OutlinedInput } from "@mui/material";
import { theme } from "../../../../style/theme";
import { SPORTS_NAMES } from "../../../../constants/sportsConstants";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200
    }
  }
};

interface SelectBoxProps {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
}

const SportSelectBox = ({ value, onChange }: SelectBoxProps) => {
  const maxSelection = 5;
  return (
    <FormControl sx={{ width: "70%" }}>
      <Select
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput />}
        renderValue={(selected) => selected.join(", ")}
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
        {SPORTS_NAMES.map((name: string) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              height: 30
            }}
            disabled={value.length >= maxSelection && !value.includes(name)}
          >
            <Checkbox
              checked={value.indexOf(name) > -1}
              sx={{
                color: theme.color.primary,
                "&.Mui-checked": {
                  color: theme.color.primary
                }
              }}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SportSelectBox;
