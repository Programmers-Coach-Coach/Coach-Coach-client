import { filterList } from "@/data/sportsList";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const useCoachFilter = (sportId: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sportsIdList, setSportsIdList] = useState<number[]>([sportId]);

  const singleFilter = (id: number) => {
    const sort =
      filterList.find((filter) => filter.id === id)?.parameter ?? "latest";
    searchParams.set("sort", sort);
    setSearchParams(searchParams);
  };

  const multiFilter = (id: number) => {
    if (sportsIdList.includes(id)) {
      // id 제거
      sportsIdList.length >= 2
        ? setSportsIdList(sportsIdList.filter((sportId) => sportId !== id))
        : toast.error("반드시 한개 이상 선택해주세요");
    } else {
      // id 추가
      if (id === 0) {
        setSportsIdList([0]);
      } else if (sportsIdList.includes(0)) {
        setSportsIdList([id]);
      } else {
        setSportsIdList([...sportsIdList, id]);
      }
    }
  };

  return {
    sportsIdList,
    singleFilter,
    multiFilter
  };
};

export default useCoachFilter;
