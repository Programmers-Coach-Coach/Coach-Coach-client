import { SORT_KEY, SPORT_KEY } from "@/constants/filter";
import { useSearchParams } from "react-router-dom";

const RECORD_ID = "recordId";
const DATE = "date";
const KEYWORD = "keyword";

const DEFAULT_SORT = "latest";
const DEFAULT_SPORTS: number[] = [];
export const DEFAULT_KEYWORD = "";

const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getRecordId = (): number | null => {
    const recordId = searchParams.get(RECORD_ID);
    return recordId ? Number(recordId) : null;
  };

  const setRecordId = (id: number) => {
    searchParams.set(RECORD_ID, String(id));
    setSearchParams(searchParams);
  };

  const getRecordDate = (): string | null => {
    return searchParams.get(DATE);
  };

  const setRecordDate = (date: string) => {
    searchParams.set(DATE, date);
    setSearchParams(searchParams);
  };

  const setKeyword = (keyword: string) => {
    searchParams.set(KEYWORD, keyword);
    setSearchParams(searchParams);
  };

  const getKeyword = (): string => {
    return searchParams.get(KEYWORD) ?? DEFAULT_KEYWORD;
  };

  const getSort = (): string => {
    return searchParams.get(SORT_KEY) ?? DEFAULT_SORT;
  };

  const getSports = (): number[] => {
    return (
      searchParams.get(SPORT_KEY)?.split(",").map(Number) ?? DEFAULT_SPORTS
    );
  };

  const removeKeyword = () => {
    searchParams.delete(KEYWORD);
    setSearchParams(searchParams);
  };

  return {
    getRecordId,
    setRecordId,
    getRecordDate,
    setRecordDate,
    setKeyword,
    getKeyword,
    getSort,
    getSports,
    removeKeyword
  };
};

export default useQueryString;
