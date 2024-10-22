export const getTitle = (pathname: string): string => {
  if (pathname.startsWith("/coach/")) {
    return "코치";
  }

  switch (pathname) {
    case "/login":
      return "로그인";
    case "/signup":
      return "회원가입";
    case "/profile":
    case "/Profile":
      return "내 프로필";
    case "/coach-list":
      return "코치 리스트";
    case "/routine":
    case "/member/routine":
      return "루틴";
    case "/routine/add":
      return "새 루틴 추가";
    case "/member":
      return "회원 리스트";
    case "/mypage":
      return "마이페이지";
    case "/record":
      return "내 기록";
    case "/record-list":
      return "내 기록";
    case "/notification":
      return "알림";
    case "/routine/my-coach":
      return "내 코치";
    case "/manage":
      return "매칭 회원 리스트";
    default:
      return "";
  }
};

export const getClickBackLink = (pathname: string) => {
  switch (pathname) {
    case "/login":
    case "/signup":
      return "/total-login";
    case "/profile":
    case "/manage":
    case "/record-list":
      return "/mypage";
    case "/coach-list":
    case "/routine":
    case "/check-password":
    case "/notification":
    case "/routine/my-coach":
      return "/home";

    case "/record":
      return "/record-list";

    case "/routine/add":
      return "/routine";
    case "/member/routine":
      return "/member";
    default:
      return null;
  }
};
