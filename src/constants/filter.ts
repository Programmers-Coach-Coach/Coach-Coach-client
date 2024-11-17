export const SORT_KEY = "sort";
export const SPORT_KEY = "sportsIds";
export const GENDER_KEY = "gender";

export type FilterKey = typeof SORT_KEY | typeof SPORT_KEY | typeof GENDER_KEY;

export const GENDER_VALUES = ["전체", "남성", "여성"];

export const GENDER_MAP = [
  {
    screenName: "전체",
    urlName: null
  },
  {
    screenName: "남성",
    urlName: "M"
  },
  {
    screenName: "여성",
    urlName: "W"
  }
];

export const SORT_MAP = [
  {
    screenName: "최신순",
    urlName: "latest"
  },
  {
    screenName: "리뷰순",
    urlName: "reivew"
  },
  {
    screenName: "좋아요순",
    urlName: "liked"
  },
  {
    screenName: "MY",
    urlName: "my"
  }
];

export type MapType = typeof GENDER_MAP | typeof SORT_MAP;

export const SPORT_MAP = [
  {
    screenName: "전체 선택"
  },
  {
    screenName: "헬스"
  },
  {
    screenName: "수영"
  },
  {
    screenName: "요가"
  },
  {
    screenName: "필라테스"
  },
  {
    screenName: "클라이밍"
  },
  {
    screenName: "발레"
  },
  {
    screenName: "골프"
  },
  {
    screenName: "테니스"
  },
  {
    screenName: "복싱"
  },
  {
    screenName: "크로스핏"
  },
  {
    screenName: "배드민턴"
  },
  {
    screenName: "러닝"
  }
];

export const MAX_SPORT_SIZE = SPORT_MAP.length - 1;

export const FILTER_VALUES = ["최신순", "별점 높은 순", "별점 낮은 순"];
