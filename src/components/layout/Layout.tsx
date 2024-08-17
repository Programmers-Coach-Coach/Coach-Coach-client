import styled from "styled-components";
import LogoHeader from "../common/Header/LogoHeader";
import DetailHeader from "../common/Header/DetailHeader";
import Footer from "../common/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { getTitle } from "@/utils/getTitle";
import { isAuthPage } from "@/utils/isAuthPage";
import ErrorBoundary from "../Error/ErrorBoundary";

const Layout = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);
  const isAuth = isAuthPage(location.pathname);
  return (
    <ErrorBoundary>
      {title ? <DetailHeader title={title} /> : <LogoHeader />}
      <LayoutStyle>
        <Outlet />
      </LayoutStyle>
      {!isAuth && <Footer />}
    </ErrorBoundary>
  );
};

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 20px 80px 20px; // 80px은 내용이 Footer 위까지만 위치하기 위해 설정
`;

export default Layout;
