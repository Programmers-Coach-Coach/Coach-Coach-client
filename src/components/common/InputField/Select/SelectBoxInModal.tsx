import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ListItemText, OutlinedInput, Typography } from "@mui/material";
import { theme } from "@/style/theme";
import { useModalInfo } from "@/store/modalInfo.store";
import useHome from "@/hooks/useHome";

interface SelectBoxProps {
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200
    }
  }
};

const SelectBoxInModal = ({ setIsSelect }: SelectBoxProps) => {
  const setSport = useModalInfo((state) => state.setSportId);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const { data, isLoading, isError } = useHome();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedValue(value);
    data.sports.forEach((sport) => {
      if (sport.sportName === value) {
        setSport(sport.sportId);
      }
    });
  };

  const handleOpen = () => {
    setIsSelect(true);
  };

  const handleClose = () => {
    setIsSelect(false);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={selectedValue} // controlled 상태로 유지
          renderValue={(v) => {
            if (!v) {
              return (
                <Typography style={{ color: "rgba(128, 128, 128, 0.65) " }}>
                  운동 종목을 고르세요.
                </Typography>
              );
            }
            return v;
          }}
          input={
            <OutlinedInput
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.color.gray2 + " !important"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.color.primary + " !important"
                }
              }}
            />
          }
          onChange={handleChange}
          onOpen={handleOpen}
          onClose={handleClose}
          MenuProps={MenuProps}
        >
          {data.sports &&
            data.sports.map((sport) => (
              <MenuItem
                key={sport.sportId}
                value={sport.sportName}
                sx={{
                  height: 30
                }}
              >
                <ListItemText primary={sport.sportName} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectBoxInModal;
