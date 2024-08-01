export const isAuthPage = (pathname: string): boolean => {
  switch (pathname) {
    case "/login":
      return true;
    case "/signup":
      return true;
    default:
      return false;
  }
};
