export const getTitle = (pathname: string): string => {
  switch (pathname) {
    case "/login":
      return "로그인";
    case "/signup":
      return "회원가입";
    case "/coach-list":
      return "코치 리스트";
    case "/routine":
      return "루틴";
    default:
      return "";
  }
};
