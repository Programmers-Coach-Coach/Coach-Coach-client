export const getTitle = (pathname: string): string => {
  switch (pathname) {
    case "/login":
      return "로그인";
    case "/signup":
      return "회원가입";
    case "/coach-list":
      return "코치 리스트";
    case "/coach":
      return "코치";
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
