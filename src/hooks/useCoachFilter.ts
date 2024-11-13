import {
  FilterKey,
  GENDER_KEY,
  GENDER_MAP,
  MapType,
  MAX_SPORT_SIZE,
  SORT_KEY,
  SORT_MAP,
  SPORT_KEY,
  SPORT_MAP
} from "@/constants/filter";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface UseCoachFilterReturns {
  pickSortFilter: (id: number) => void;
  pickSportOptions: (id: number) => void;
  pickGender: (id: number) => void;
  reflectChangesToUrl: () => void;
  getSportsText: () => string;
  getGenderText: () => string;
  sort: number;
  sportOptions: number[];
  gender: number;
  isSportFilterApplied: boolean;
  isGenderApplied: boolean;
}

// TODO: 자식으로 넘겨줄 때 계속해서 각각 타입을 지정하는 것이 코드가 복잡해져
// 타입을 지정해주는 것 블로그 작성!

const useCoachFilter = (): UseCoachFilterReturns => {
  const [searchParams, setSearchParams] = useSearchParams();

  const returnOptionId = (mapType: MapType, s: string | null) => {
    if (s === null) return 0;
    return mapType.findIndex((option) => option.urlName === s);
  };

  const returnSportOptionIds = (): number[] => {
    const lst = searchParams.get(SPORT_KEY);
    if (lst === null) return [];
    return lst.split(",").map(Number);
  };

  const getSportsText = (): string => {
    const sportList = returnSportOptionIds();

    if (sportList.length === 0) return "운동";

    const etcLen = sportList.length - 1;

    return `${SPORT_MAP[sportList[0]].screenName}${etcLen > 0 ? ` 외 ${etcLen}` : ""}`;
  };

  const getGenderText = (): string => {
    const type = returnOptionId(GENDER_MAP, searchParams.get(GENDER_KEY));

    if (!type) return "성별";

    return GENDER_MAP[type].screenName;
  };

  const isSportFilterApplied = !!(returnSportOptionIds().length > 0);
  const isGenderApplied = !!returnOptionId(
    GENDER_MAP,
    searchParams.get(GENDER_KEY)
  );
  // TODO: searchParams가 변경된다고 상태가 재렌더링이 되지 않는걸로 블로그쓰기

  const [sort, setSort] = useState<number>(
    returnOptionId(SORT_MAP, searchParams.get(SORT_KEY))
  );

  const [sportOptions, setSportOptions] = useState<number[]>(
    returnSportOptionIds()
  );

  const [gender, setGender] = useState<number>(
    returnOptionId(GENDER_MAP, searchParams.get(GENDER_KEY))
  );

  const pickSortFilter = (id: number) => {
    setSort(id);
  };

  const pickSportOptions = (id: number) => {
    let newSportsIds: number[];

    const shouldAddSport = !sportOptions.includes(id);

    if (shouldAddSport) {
      if (id === 0) {
        newSportsIds = [];
      } else {
        newSportsIds = [...sportOptions, id];
        if (newSportsIds.length === MAX_SPORT_SIZE) {
          newSportsIds = [];
        }
      }
    } else {
      newSportsIds = sportOptions.filter((sportId) => sportId !== id);
    }

    setSportOptions(newSportsIds);
  };

  const pickGender = (id: number) => {
    setGender(id);
  };

  const setUrl = (key: FilterKey, mapType: MapType, id: number) => {
    const urlName = mapType[id].urlName;

    if (key === GENDER_KEY && !urlName) {
      searchParams.delete(GENDER_KEY);
      return;
    }

    if (urlName) {
      searchParams.set(key, urlName);
    } else {
      searchParams.set(key, mapType[0].urlName as string);
    }
  };

  const setSportUrl = () => {
    if (sportOptions.length > 0) {
      searchParams.set(SPORT_KEY, sportOptions.join(","));
    } else {
      searchParams.delete(SPORT_KEY);
    }
  };

  const reflectChangesToUrl = () => {
    setUrl(SORT_KEY, SORT_MAP, sort);
    setUrl(GENDER_KEY, GENDER_MAP, gender);
    setSportUrl();
    setSearchParams(searchParams);
  };

  return {
    pickSortFilter,
    pickSportOptions,
    pickGender,
    reflectChangesToUrl,
    getSportsText,
    getGenderText,
    sort,
    sportOptions,
    gender,
    isSportFilterApplied,
    isGenderApplied
  };
};

export default useCoachFilter;
