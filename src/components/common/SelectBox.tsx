import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { OutlinedInput } from "@mui/material";
import { theme } from "../../style/theme"; // theme.ts에서 theme를 임포트

const ITEM_HEIGHT = 40;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5
    }
  }
};

const names = [
  "헬스",
  "수영",
  "요가",
  "필라테스",
  "클라이밍",
  "발레",
  "골프",
  "테니스",
  "복싱",
  "크로스핏",
  "배드민턴",
  "러닝"
];

export default function SelectBox() {
  const [sports, setSports] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof sports>) => {
    const {
      target: { value }
    } = event;
    setSports(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "55%" }}>
        <Select
          multiple
          value={sports}
          onChange={handleChange}
          input={
            <OutlinedInput
              sx={{
                backgroundColor: theme.color.white,
                height: "36px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.color.white + " !important"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.color.yellow + " !important"
                }
              }}
            />
          }
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                checked={sports.indexOf(name) > -1}
                sx={{
                  color: theme.color.yellow,
                  "&.Mui-checked": {
                    color: theme.color.yellow
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
