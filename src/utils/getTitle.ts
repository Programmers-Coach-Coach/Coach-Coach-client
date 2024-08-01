export const getTitle = (pathname: string): string => {
  switch (pathname) {
    case "/login":
      return "로그인";
    case "/signup":
      return "회원가입";
    default:
      return "";
  }
};
