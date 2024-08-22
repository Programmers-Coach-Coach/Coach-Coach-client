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
  const queryParams = new URLSearchParams(location.search);

  let title: string | null = "";

  if (queryParams.get("coach")) {
    title = queryParams.get("coach");
  } else if (queryParams.get("member")) {
    title = queryParams.get("member");
  } else if (queryParams.get("routineName")) {
    title = queryParams.get("routineName");
  } else {
    title = getTitle(location.pathname);
  }

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
