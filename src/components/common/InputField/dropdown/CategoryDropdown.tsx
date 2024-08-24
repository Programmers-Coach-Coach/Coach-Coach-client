import IconButton from "@/components/Icon/IconButton";
import Action from "@/components/routine/Action";
import { IAction, ICategory } from "@/models/routine.model";
import { useModalInfo } from "@/store/modalInfo.store";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Completed from "../CheckBox/Completed";
import { useIsCoach } from "@/store/isCoach.store";

interface Props {
  category: ICategory;
  actions: IAction[];
  modifyEnabled?: boolean;
  onEditCategory?: () => void; // 카테고리 수정, 삭제 기능
  onEditAction?: () => void; // 액션 수정 기능, 삭제 기능
}

const CategoryDropdown = ({
  category,
  actions,
  modifyEnabled = false,
  onEditCategory,
  onEditAction
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isCoach = useIsCoach((state) => state.isCoach);
  const setCategoryId = useModalInfo((state) => state.setCategoryId);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleEditCategory = () => {
    setCategoryId(category.categoryId);
    onEditCategory && onEditCategory();
  };

  return (
    <Wrapper>
      <DropdownBox onClick={handleToggle}>
        {!isCoach && (
          <Completed
            isCompleted={category.isCompleted ? category.isCompleted : false}
            categoryId={category.categoryId}
          />
        )}
        {category.categoryName}
        <Buttons $isOpen={isOpen}>
          {modifyEnabled && (
            <IconButton
              name="dots"
              color="text"
              size="24px"
              onClick={handleEditCategory}
            />
          )}
          <IconButton
            name="arrowDown"
            color="text"
            size="24px"
            onClick={handleToggle}
            className="arrow-button"
          />
        </Buttons>
      </DropdownBox>
      {isOpen && (
        <OptionBox $isOpen={isOpen}>
          {actions.map((action) => (
            <Action
              key={action.actionId}
              action={action}
              modifyEnabled={modifyEnabled}
              onEditAction={onEditAction}
            />
          ))}
        </OptionBox>
      )}
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
  padding: 0 10px;

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

export default CategoryDropdown;
