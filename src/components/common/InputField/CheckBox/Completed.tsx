import {
  useDeleteCompleted,
  usePostCompleted
} from "@/hooks/queries/routine/useCategory";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { styled } from "styled-components";

interface CompletedProps {
  isCompleted: boolean;
  categoryId: number;
}

const Completed = ({ isCompleted, categoryId }: CompletedProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const postCompletedResponse = usePostCompleted();
  const deleteCompletedResponse = useDeleteCompleted();

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!isChecked) {
      postCompletedResponse.mutate(categoryId);
    } else {
      deleteCompletedResponse.mutate(categoryId);
    }
    setIsChecked(!isChecked);
  };

  return (
    <CompletedStyle>
      <Checkbox
        checked={isChecked}
        onClick={handleClick}
        inputProps={{ "aria-label": "controlled" }}
      />
    </CompletedStyle>
  );
};

const CompletedStyle = styled.div``;

export default Completed;
