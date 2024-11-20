<<<<<<< HEAD
import React, { useRef, ReactNode, useState, useEffect } from "react";
import { styled } from "styled-components";
import CustomButton from "../../Button/CustomButton";
import { ButtonSize } from "@/style/theme";
=======
import SvgIcon from "@/components/Icon/SvgIcon";
import { ButtonSize } from "@/style/theme";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import CustomButton from "../../Button/CustomButton";
>>>>>>> main

interface OneButtonContentProps {
  children: ReactNode; // children으로 감싸진 컴포넌트를 받아옴
  title: string;
  buttonText: string;
<<<<<<< HEAD
=======
  onClose?: () => void;
>>>>>>> main
}

const OneButtonContent = ({
  children,
  title,
<<<<<<< HEAD
  buttonText
=======
  buttonText,
  onClose
>>>>>>> main
}: OneButtonContentProps) => {
  const childRef = useRef<{ childFunction: () => void } | null>(null);
  const [size, setSize] = useState<ButtonSize>("desktop");
  const [fontSize, setFontSize] = useState<string>("22px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setSize("desktop");
        setFontSize("22px");
      } else {
        setSize("mobile");
        setFontSize("5vw");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickHandler = () => {
    if (childRef.current) {
      childRef.current.childFunction(); // 자식 컴포넌트의 함수 호출
    }
  };

  // children에 ref 전달
  const ChildWithRef = React.cloneElement(children as React.ReactElement, {
    ref: childRef
  });

  return (
    <OneButtonContentStyle>
<<<<<<< HEAD
      <Header>{title}</Header>
=======
      <Header>
        {title}
        {onClose && (
          <SvgIcon
            name="x"
            width="24px"
            height="24px"
            stroke="#777C89"
            onClick={onClose}
            className="close__button"
          />
        )}
      </Header>

>>>>>>> main
      {ChildWithRef}
      <Footer>
        <CustomButton
          size={size}
          variant="contained"
          onClick={onClickHandler}
          fontSize={fontSize}
        >
          {buttonText}
        </CustomButton>
      </Footer>
    </OneButtonContentStyle>
  );
};

const OneButtonContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  font-size: 5vw;
  font-weight: bold;
<<<<<<< HEAD
  margin: 3vh 0 6vh 0;
  text-align: center;
=======
  padding: 23px 0;
  /* padding: 3vh auto 6vh auto; */
  /* text-align: center; */

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .close__button {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translate(0, -50%);
    cursor: pointer;
  }
>>>>>>> main

  &::before {
    content: "";
    position: absolute;
<<<<<<< HEAD
    bottom: -3vh;
    left: 5%;
    width: 90%;
    height: 2px;
=======
    bottom: 0;
    width: 90%;
    height: 1px;
>>>>>>> main
    background-color: #666666;
    @media (min-width: 600px) {
      bottom: -30px;
    }
  }

  @media (min-width: 600px) {
    font-size: 22px;
    margin: 30px 0 60px 0;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin: 3vh 0px;
  @media (min-width: 600px) {
    margin: 30px 0px;
  }
`;

export default OneButtonContent;
