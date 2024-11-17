import { useState } from "react";
import styled from "styled-components";
import DaumPostcode, { Address } from "react-daum-postcode";
import CustomButton from "../common/Button/CustomButton";
import CommonInput from "../common/InputField/Text/CommonInput";

interface AddressSearchFieldProps {
  type: string;
  value: string;
  onAddressSelect: (address: string) => void;
  inputWidth?: string;
}

const AddressSearchField = ({
  value,
  type,
  onAddressSelect,
  inputWidth
}: AddressSearchFieldProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const completeHandler = (data: Address) => {
    if (type === "home") {
      onAddressSelect(data.sigungu);
    } else {
      onAddressSelect(data.address);
    }

    setIsOpen(false);
  };

  return (
    <Container>
      <BasicWrapper>
        <InputWrapper width={inputWidth}>
          <CommonInput
            placeholder="센터 주소"
            type="text"
            value={value}
            disabled
            inputHeight="40px"
          />
        </InputWrapper>
        <ButtonWrapper>
          <CustomButton
            variant="outlined"
            size="super-mini"
            onClick={handleOpen}
            fontSize="12px"
          >
            주소 검색
          </CustomButton>
        </ButtonWrapper>
      </BasicWrapper>
      {isOpen && (
        <div>
          <DaumPostcode onComplete={completeHandler} />
        </div>
      )}
    </Container>
  );
};

const InputWrapper = styled.div<{ width?: string }>`
  display: flex;
  width: ${({ width }) => width || "70%"};
`;

const Container = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 5px;
`;

const BasicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
`;

export default AddressSearchField;
