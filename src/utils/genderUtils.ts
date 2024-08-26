export const getGenderLabel = (gender: "M" | "W" | null | undefined) => {
  switch (gender) {
    case "M":
      return "남성";
    case "W":
      return "여성";
    default:
      return "알 수 없음";
  }
};
