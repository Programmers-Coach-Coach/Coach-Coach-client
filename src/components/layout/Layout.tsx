import useAnalytics from "@/hooks/useAnalytics";
import { getTitle } from "@/utils/getTitle";
import { isAuthPage } from "@/utils/isAuthPage";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../common/Footer/Footer";
import DetailHeader from "../common/Header/DetailHeader";
import LogoHeader from "../common/Header/LogoHeader";
import ErrorBoundary from "../Error/ErrorBoundary";

const Layout = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);
  const isAuth = isAuthPage(location.pathname);

  useAnalytics();

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
  padding: 0 20px;
`;

export default Layout;
