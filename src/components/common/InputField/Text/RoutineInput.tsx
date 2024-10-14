import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@/components/Icon/IconButton";

interface RoutineInputProps {
  label: string;
  placeholder: string;
  isSelect?: boolean;
  isAction?: boolean;
  isToggleOpen?: boolean;
  setIsToggleOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoutineInput = ({
  label,
  placeholder,
  isSelect = false,
  isAction = false,
  isToggleOpen = true,
  setIsToggleOpen = () => {}
}: RoutineInputProps) => {
  const onClickHandler = () => {
    alert("gd");
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <FormControl
      variant="standard"
      style={{ position: "relative" }}
      onClick={isSelect ? onClickHandler : undefined}
    >
      <CustomInputLabel
        shrink
        htmlFor="bootstrap-input"
        $isToggleOpen={isToggleOpen}
      >
        {label}
        {isAction && (
          <>
            <IconButton
              name="dropUp"
              color="text"
              size="24px"
              className="drop-button"
              onClick={onClickToggle}
            />
            <p>삭제하기</p>
          </>
        )}
      </CustomInputLabel>

      <BootstrapInput
        placeholder={placeholder}
        id="bootstrap-input"
        endAdornment={
          isSelect ? (
            <IconWrapper>
              <IconButton name="arrowDown" color="text" size="24px" />
            </IconWrapper>
          ) : null
        }
        inputProps={{
          readOnly: isSelect
        }}
        isSelect={isSelect}
      />
    </FormControl>
  );
};

interface BootstrapInputProps {
  isSelect: boolean;
}

const BootstrapInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "isSelect"
})<BootstrapInputProps>(({ theme, isSelect }) => ({
  marginLeft: 10,

  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 15,
    position: "relative",
    backgroundColor: "#35383F",
    border: "1px solid",
    borderColor: "#252932",
    color: "#FFFFFF",
    fontSize: "20px",
    width: "480px",
    height: "60px",
    padding: "5px 20px",
    paddingRight: "40px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),

    "&::placeholder": {
      color: "#777C89",
      opacity: 0.93
    },

    "&:focus": {
      borderColor: "#0075FF"
    },

    ...(isSelect && {
      cursor: "pointer",
      pointerEvents: "none"
    })
  },

  ...(isSelect && {
    cursor: "pointer"
  })
}));

const CustomInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== "$isToggleOpen" // $isToggleOpen이 DOM으로 전달되지 않도록 설정
})<{ $isToggleOpen: boolean }>(({ $isToggleOpen }) => ({
  display: "flex",
  width: "100%",
  color: "#9EA3B2",
  fontSize: "18px",
  fontWeight: "bold",
  "&.Mui-focused": {
    color: "#9EA3B2"
  },
  p: {
    margin: "0 10px",
    color: "#959AA8",
    cursor: "pointer",
    fontSize: "14px"
  },
  svg: {
    fill: $isToggleOpen ? "#959AA8" : "#0075FF", // 회전 후 색상 변경
    marginLeft: "10px",
    transition: "fill 0.3s ease-in-out" // 색상 변경 애니메이션
  },
  ".drop-button": {
    transform: $isToggleOpen ? "rotateX(0deg)" : "rotateX(180deg)", // 3D 회전
    transition: "transform 0.3s ease-in-out",
    transformStyle: "preserve-3d", // 3D 회전을 유지하도록 설정
    perspective: "1000px" // 입체적인 효과를 위한 perspective 설정
  }
}));

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  right: "5%",
  transform: "translateY(-50%)",
  pointerEvents: "none"
});

export default RoutineInput;
