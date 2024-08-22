import { usePostCompleted } from "@/hooks/queries/routine/useCategory";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

interface CompletedProps {
  isCompleted: boolean;
  categoryId: number;
}

const Completed = ({ isCompleted, categoryId }: CompletedProps) => {
  const { routineId } = useParams();
  const [isChecked, setIsChecked] = useState(isCompleted);
  const postCompletedResponse = usePostCompleted();

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleChange = () => {
    postCompletedResponse.mutate({ routineId: Number(routineId), categoryId });
    setIsChecked(!isChecked);
  };

  return (
    <CompletedStyle>
      <Checkbox
        checked={isChecked}
        onClick={handleClick}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </CompletedStyle>
  );
};

const CompletedStyle = styled.div``;

export default Completed;
