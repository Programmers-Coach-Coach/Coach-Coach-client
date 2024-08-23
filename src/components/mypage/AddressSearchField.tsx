import { useState } from "react";
import styled from "styled-components";
import DaumPostcode, { Address } from "react-daum-postcode";
import { TextField } from "@mui/material";
import CustomButton from "../common/Button/CustomButton";

interface AddressSearchFieldProps {
  label: string;
  value: string;
  onAddressSelect: (address: string) => void;
}

const AddressSearchField = ({
  label,
  value,
  onAddressSelect
}: AddressSearchFieldProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const completeHandler = (data: Address) => {
    onAddressSelect(data.address);
    setIsOpen(false);
  };

  return (
    <>
      <BasicWrapper>
        <SubtitleWrapper>{label}</SubtitleWrapper>
        <CustomButton variant="outlined" size="small" onClick={handleOpen}>
          주소 검색
        </CustomButton>
      </BasicWrapper>
      {isOpen && (
        <div>
          <DaumPostcode onComplete={completeHandler} />
        </div>
      )}
      <TextField value={value} maxRows={1} disabled fullWidth />
    </>
  );
};

const BasicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubtitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
  font-weight: ${({ theme }) => theme.titleSize.t2.bold};
`;

export default AddressSearchField;
