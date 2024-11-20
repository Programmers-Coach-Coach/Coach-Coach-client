import { forwardRef, useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import styled from "styled-components";

interface CommonInputProps {
  placeholder?: string;
  name?: string;
  type: string;
  label?: string;
  icon?: string;
  value: string | undefined;
  inputHeight?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  (
    {
      placeholder,
      name,
      type,
      label,
      icon,
      value,
      onChange,
      disabled,
      inputHeight
    },
    ref
  ) => {
    const [showPswd, setShowPswd] = useState<boolean>(false);

    const toggleHidePassword = () => {
      setShowPswd(!showPswd);
    };

    return (
      <Container>
        {label && <TitleWrapper>{label}</TitleWrapper>}

        <InsideWrapper>
          {icon && (
            <LeftIconWrapper>
              <img src={icon} alt="left icon" />
            </LeftIconWrapper>
          )}

          <InputWrapper
            ref={ref}
            type={type === "password" && showPswd ? "text" : type}
            name={name}
            placeholder={placeholder}
            $hasLeftIcon={!!icon}
            value={value}
            onChange={onChange}
            disabled={disabled}
            height={inputHeight || "60px"}
          />

          {type === "password" && (
            <RightIconWrapper onClick={toggleHidePassword}>
              {showPswd ? <BiSolidHide /> : <BiSolidShow />}
            </RightIconWrapper>
          )}
        </InsideWrapper>
      </Container>
    );
  }
);

const InsideWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  font-size: 14px;
  position: relative;
  left: 10px;
  color: #777c89;
`;

const InputWrapper = styled.input<{ $hasLeftIcon: boolean; height?: string }>`
  width: 100%;
  height: ${({ height }) => height};
  padding: ${({ $hasLeftIcon }) =>
    $hasLeftIcon ? "16px 100px 16px 40px" : "16px"};
  background-color: #252932;
  border: none;
  border-radius: 10px;
  color: #777c89;
  font-size: 16px;
`;

const LeftIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-40%);
  cursor: pointer;
  color: #777c89;
  font-size: 20px;
`;

export default CommonInput;
