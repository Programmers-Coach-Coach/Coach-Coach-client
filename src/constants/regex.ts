export const AUTH_REGEX = {
  nickname:
    /^(?!.*\s{2,})[0-9a-zA-Z가-힣][0-9a-zA-Z가-힣\s]{0,8}[0-9a-zA-Z가-힣\s]$/,
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
};
