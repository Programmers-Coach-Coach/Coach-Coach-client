import { LinearProgress } from "@mui/material";
import styled from "styled-components";

interface ProgressProps {
  value: number;
}

const Progress = ({ value }: ProgressProps) => {
  return (
    <>
      <ProgressStyle>
        <p>달성률</p>
        <p className="percent">{value * 100}%</p>
      </ProgressStyle>
      <LinearProgress
        variant="determinate"
        value={value * 100}
        sx={{
          height: 30,
          borderRadius: 2,
          border: "6px solid #3A3A3A",
          backgroundColor: "#111111",
          boxSizing: "border-box",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#0075FF"
          },
          "@media (max-width: 375px)": {
            height: 20,
            border: "4px solid #3A3A3A"
          }
        }}
      />
    </>
  );
};

const ProgressStyle = styled.div`
  display: flex;
  justify-content: end;
  margin: 1vh 0;

  .percent {
    margin-left: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 375px) {
    p {
      font-size: 12px;
    }
  }
`;

export default Progress;
