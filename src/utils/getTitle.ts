export const getTitle = (pathname: string): string => {
  if (pathname.startsWith("/coach/")) {
    return "코치";
  }

  switch (pathname) {
    case "/login":
      return "로그인";
    case "/signup":
      return "회원가입";
    case "/coach-list":
      return "코치 리스트";
    case "/routine":
      return "루틴";
    case "/check-password":
      return "본인확인";
    case "/record":
      return "내 기록";
    case "/record-list":
      return "내 기록";
    case "/notification":
      return "알림";
    case "/routine/my-coach":
      return "내 코치";
    case "/manage":
      return "회원 관리";
    default:
      return "";
  }
};

export const getClickBackLink = (pathname: string) => {
  switch (pathname) {
    case "/login":
    case "/signup":
    case "/coach-list":
    case "/routine":
    case "/check-password":
    case "/record-list":
    case "/notification":
    case "/routine/my-coach":
    case "/manage":
      return "/";

    case "/record":
      return "/record-list";

    default:
      return null;
  }
};
