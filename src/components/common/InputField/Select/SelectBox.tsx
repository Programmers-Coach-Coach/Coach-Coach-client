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

const SelectBox = ({ value, onChange }: SelectBoxProps) => {
  return (
    <FormControl sx={{ width: "70%" }}>
      <Select
        multiple
        value={value}
        onChange={onChange}
        input={
          <OutlinedInput
            sx={{
              backgroundColor: theme.color.background,
              height: "36px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.color.primary
              }
            }}
          />
        }
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {SPORTS_NAMES.map((name: string) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              height: 30
            }}
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

export default SelectBox;
