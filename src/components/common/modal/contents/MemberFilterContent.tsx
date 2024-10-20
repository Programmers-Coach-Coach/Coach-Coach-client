import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface MemberFilterContentProps {
  filterList: string[];
  selectIndex: number;
  setFilterIndex: React.Dispatch<React.SetStateAction<number>>;
  closeModal: () => void;
}

interface ChildComponentHandle {
  childFunction: () => void;
}

const MemberFilterContent = forwardRef<
  ChildComponentHandle,
  MemberFilterContentProps
>(({ filterList, selectIndex, setFilterIndex, closeModal }, ref) => {
  const [selected, setSelected] = useState<number>(selectIndex);

  useImperativeHandle(ref, () => ({
    childFunction() {
      setFilterIndex(selected);
      closeModal();
    }
  }));

  const handleCheck = (index: number) => {
    setSelected(index);
  };

  return (
    <MemberFilterContentStyle>
      {filterList.map((filter, index) => (
        <MemberFilterItemStyle key={index}>
          <MemberFilterCheckboxStyle
            isSelected={selected === index}
            onClick={() => handleCheck(index)}
          />
          {filter}
        </MemberFilterItemStyle>
      ))}
    </MemberFilterContentStyle>
  );
});

const MemberFilterContentStyle = styled.div``;

const MemberFilterItemStyle = styled.div`
  display: flex;
  font-size: 3vw;
  padding: 3vw;
  padding-left: 10vw;
  @media (min-width: 600px) {
    font-size: 20px;
    padding: 20px;
    padding-left: 60px;
  }
`;

const MemberFilterCheckboxStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected"
})<{ isSelected: boolean }>`
  display: inline-block;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  border: 2px solid #0075ff;
  background: ${({ isSelected }) =>
    isSelected
      ? "radial-gradient(circle, white 40%, #0075ff 60%)"
      : "transparent"};
  transition: all 150ms;
  cursor: pointer;
  margin-right: 2.5vw;
  @media (min-width: 600px) {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
`;

export default MemberFilterContent;
