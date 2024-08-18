import IconButton from "@/components/Icon/IconButton";
import { IAction } from "@/models/routine.model";
import { LineClamp } from "@/style/global";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  category: string;
  actions: IAction[];
  modifyEnabled?: boolean;
  onEditCategory?: () => void; // 카테고리 수정, 삭제 기능
  onEditAction?: () => void; // 액션 수정 기능, 삭제 기능
}

const RoutineDropdown = ({
  category,
  actions,
  modifyEnabled = false,
  onEditCategory,
  onEditAction
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEditCategory) {
      onEditCategory();
    }
  };

  return (
    <Wrapper>
      <DropdownBox onClick={handleToggle}>
        {category}
        <Buttons $isOpen={isOpen}>
          {modifyEnabled && (
            <IconButton
              name="dots"
              color="text"
              size="24px"
              onClick={handleCategory}
            />
          )}
          <IconButton
            name="arrowDown"
            color="text"
            size="24px"
            onClick={() => {}}
            className="arrow-button"
          />
        </Buttons>
      </DropdownBox>
      <OptionBox $isOpen={isOpen}>
        {actions.map((action) => (
          <Action key={action.actionId}>
            <Text>
              <p className="b3">{action.actionName}</p>
              <LineClamp $line={1} className="b2">
                {action.countOrMinutes} {action.sets}세트
              </LineClamp>
            </Text>
            {modifyEnabled && (
              <IconButton
                name="dots"
                color="text"
                size="24px"
                onClick={onEditAction}
              />
            )}
          </Action>
        ))}
      </OptionBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 800;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

  .modify-button {
    margin: 4px;
  }
`;

const Buttons = styled.div<{ $isOpen: boolean }>`
  margin-left: auto;
  display: flex;
  gap: 10px;

  .arrow-button {
    transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0")});
    transition: transform 0.3s ease-in-out;
  }
`;

const OptionBox = styled.ul<{ $isOpen: boolean }>`
  overflow: hidden;
  animation: ${({ $isOpen }) => ($isOpen ? slideDown : slideUp)} 0.3s
    ease-in-out forwards;
`;

const Action = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const slideDown = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1000px; // 충분히 큰 값(Action 12개까지 가능)
  }
`;

const slideUp = keyframes`
  0% {
    max-height: 1000px;
  }
  100% {
    max-height: 0;
  }
`;

export default RoutineDropdown;
