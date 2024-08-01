import styled from "styled-components";
import LogoHeader from "../common/Header/LogoHeader";
import DetailHeader from "../common/Header/DetailHeader";
import Footer from "../common/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { getTitle } from "@/utils/getTitle";
import { isAuthPage } from "@/utils/isAuthPage";

const Layout = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);
  const isAuth = isAuthPage(location.pathname);
  return (
    <>
      {title ? <DetailHeader title={title} /> : <LogoHeader />}
      <LayoutStyle>
        <Outlet />
      </LayoutStyle>
      {!isAuth && <Footer />}
    </>
  );
};

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 20px;
`;

export default Layout;
