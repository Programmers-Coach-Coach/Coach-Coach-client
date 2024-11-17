export const nameMasking = (name: string | null): string => {
  if (!name) {
    return "알수없음";
  }

  const maskedPart = "*".repeat(name.length - 1);
  return name[0] + maskedPart;
};
