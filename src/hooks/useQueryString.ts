import { useSearchParams } from "react-router-dom";

const RECORD_ID = "recordId";
const DATE = "date";

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

  return {
    getRecordId,
    setRecordId,
    getRecordDate,
    setRecordDate
  };
};

export default useQueryString;
