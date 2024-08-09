import * as React from "react";
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
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectBox({ setIsSelect }: SelectBoxProps) {
  const [sports, setSports] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof sports>) => {
    const {
      target: { value }
    } = event;
    setSports(typeof value === "string" ? value.split(",") : value);
  };

  const handleOpen = () => {
    setIsSelect(true);
  };

  const handleClose = () => {
    setIsSelect(false);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "200px" }}>
        <Select
          multiple
          value={sports}
          onChange={handleChange}
          onOpen={handleOpen}
          onClose={handleClose}
          input={
            <OutlinedInput
              sx={{
                backgroundColor: theme.color.box,
                height: "36px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.color.box + " !important"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.color.primary + " !important"
                }
              }}
            />
          }
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {SPORTS_NAMES.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                height: 30
              }}
            >
              <Checkbox
                checked={sports.indexOf(name) > -1}
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
    </div>
  );
}
