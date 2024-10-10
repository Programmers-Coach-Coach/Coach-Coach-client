export const isAuthPage = (pathname: string): boolean => {
  switch (pathname) {
    case "/login":
      return true;
    case "/total-login":
      return true;
    case "/signup":
      return true;
    case "/second":
      return true;
    case "/":
      return true;
    default:
      return false;
  }
};
