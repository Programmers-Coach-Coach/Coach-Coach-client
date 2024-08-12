export const AUTH_REGEX = {
  nickname:
    /^(?!.*\s{2,})([0-9a-zA-Z가-힣][0-9a-zA-Z가-힣\s]{0,8}[0-9a-zA-Z가-힣])$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};
