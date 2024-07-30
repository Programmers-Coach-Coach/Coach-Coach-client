import React from "react";
import styled from "styled-components";
import LogoHeader from "../common/Header/LogoHeader";
import DetailHeader from "../common/Header/DetailHeader";
import Footer from "../common/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      {title ? <DetailHeader title={title} /> : <LogoHeader />}
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
};

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`;

export default Layout;
