import { useSearchParams } from "react-router-dom";

const RECORD_ID = "recordId";
const DATE = "date";
const KEYWORD = "keyword";
const SORT = "sort";
const SPORTS_IDS = "sportsIds";

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

  const getKeyword = (): string | null => {
    return searchParams.get(KEYWORD);
  };

  const getSort = (): string | null => {
    return searchParams.get(SORT);
  };

  return {
    getRecordId,
    setRecordId,
    getRecordDate,
    setRecordDate,
    setKeyword,
    getKeyword,
    getSort
  };
};

export default useQueryString;
