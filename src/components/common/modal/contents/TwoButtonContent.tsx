import { useState, useEffect } from "react";
import { styled } from "styled-components";
import CustomButton from "../../Button/CustomButton";
import { ButtonSize } from "@/style/theme";

interface TwoButtonContentProps {
  title: string;
  description: string;
  cancelButtonText: string;
  onCancel: () => void;
  ConfirmButtonText: string;
  onConfirm: () => void;
}

const TwoButtonContent = ({
  title,
  description,
  cancelButtonText,
  onCancel,
  ConfirmButtonText,
  onConfirm
}: TwoButtonContentProps) => {
  const [size, setSize] = useState<ButtonSize>("desktop");
  const [fontSize, setFontSize] = useState<string>("22px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setSize("mini_desktop");
        setFontSize("22px");
      } else {
        setSize("mini_mobile");
        setFontSize("5vw");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TwoButtonContentStyle>
      <Content>
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
      </Content>
      <Footer>
        <CustomButton
          size={size}
          variant="containedCancel"
          onClick={onCancel}
          fontSize={fontSize}
        >
          {cancelButtonText}
        </CustomButton>
        <CustomButton
          size={size}
          variant="contained"
          onClick={onConfirm}
          fontSize={fontSize}
        >
          {ConfirmButtonText}
        </CustomButton>
      </Footer>
    </TwoButtonContentStyle>
  );
};

const TwoButtonContentStyle = styled.div`
  width: 100%;
`;

const Content = styled.div`
  text-align: center;

  .title {
    font-size: 4.5vw;
    margin: 10vw 0 3vw 0;
    font-weight: bold;
    color: #0075ff;

    @media (min-width: 600px) {
      font-size: 22px;
      margin: 60px 0 15px 0;
    }
  }

  .desc {
    font-size: 3vw;
    margin: 3vw 0 10vw 0;

    @media (min-width: 600px) {
      font-size: 16px;
      margin: 15px 0 60px 0;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3vh 3vw;
  @media (min-width: 600px) {
    margin: 30px 30px;
  }
`;

export default TwoButtonContent;
