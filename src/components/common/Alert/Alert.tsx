import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import styled from "styled-components";

interface SimpleAlertProps {
  text: string;
}

const SimpleAlert = ({ text }: SimpleAlertProps) => {
  return (
    <AlertWrapper icon={<CheckIcon fontSize="inherit" />} severity="success">
      {text}
    </AlertWrapper>
  );
};

const AlertWrapper = styled(Alert)`
  position: fixed;
  top: 76px;
`;

export default SimpleAlert;
