import { forwardRef, useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import styled from "styled-components";

interface CommonInputProps {
  placeholder: string;
  name: string;
  type: string;
  label: string;
  icon?: string;
  value: string | undefined; // string | undefined로 변경
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  ({ placeholder, name, type, label, icon, value, onChange }, ref) => {
    const [showPswd, setShowPswd] = useState<boolean>(false);

    const toggleHidePassword = () => {
      setShowPswd(!showPswd);
    };

    return (
      <PasswordWrapper>
        <TitleWrapper>{label}</TitleWrapper>

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
            hasLeftIcon={!!icon}
            value={value}
            onChange={onChange}
          />

          {type === "password" && (
            <RightIconWrapper onClick={toggleHidePassword}>
              {showPswd ? <BiSolidHide /> : <BiSolidShow />}
            </RightIconWrapper>
          )}
        </InsideWrapper>
      </PasswordWrapper>
    );
  }
);

const InsideWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
`;

const TitleWrapper = styled.div`
  font-size: 14px;
  position: relative;
  left: 10px;
  color: #777c89;
`;

const InputWrapper = styled.input<{ hasLeftIcon: boolean }>`
  width: 100%;
  height: 60px;
  padding: ${({ hasLeftIcon }) =>
    hasLeftIcon
      ? "16px 100px 16px 40px"
      : "16px"}; /* 아이콘이 있는 경우 여유 공간 확보 */
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
