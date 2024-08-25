import { useSearchParams } from "react-router-dom";

const RECORD_ID = "recordId";
const DATE = "date";

export const useGetQueryRecordId = (): number | null => {
  const [searchParams] = useSearchParams();

  const recordId = searchParams.get(RECORD_ID);
  return recordId ? Number(recordId) : null;
};

export const useGetQueryRecordDate = (): string | null => {
  const [searchParams] = useSearchParams();

  return searchParams.get(DATE);
};

export const useQueryRecordId = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setRecordId = (id: number) => {
    searchParams.set(RECORD_ID, String(id));
    setSearchParams(searchParams);
  };

  return { setRecordId };
};
