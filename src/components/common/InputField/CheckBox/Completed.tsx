import {
  useDeleteCompleted,
  usePostCompleted
} from "@/hooks/queries/useRoutine";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { styled } from "styled-components";

interface CompletedProps {
  routineId: number;
  isCompleted: boolean;
}

const Completed = ({ routineId, isCompleted }: CompletedProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const postCompleted = usePostCompleted();
  const deleteCompleted = useDeleteCompleted();

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!isChecked) {
      postCompleted.mutate(routineId);
    } else {
      deleteCompleted.mutate(routineId);
    }
    setIsChecked(!isChecked);
  };

  return (
    <CompletedStyle>
      <Checkbox
        checked={isChecked}
        onClick={handleClick}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          padding: "0 5px 0 15px",
          transform: "scale(1)",
          "@media (max-width: 375px)": {
            transform: "scale(0.8)"
          }
        }}
      />
    </CompletedStyle>
  );
};

const CompletedStyle = styled.div`
  display: flex;
  align-items: center;
`;

export default Completed;
