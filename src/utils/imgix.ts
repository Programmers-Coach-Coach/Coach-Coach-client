import qs from "qs";
export const getImgixUrl = (
  src: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: { [key: string]: any } = {}
): string => {
  try {
    const { pathname } = new URL(src);
    qs.stringify(params);
    return `${import.meta.env.VITE_IMGIX_CDN_URL}${pathname}?w=228&h=228&auto=format`;
  } catch (err) {
    return src;
  }
};
