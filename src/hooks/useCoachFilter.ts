import { useState } from "react";
import toast from "react-hot-toast";
const useCoachFilter = (id: number | undefined) => {
  console.log(id);
  const [filterId, setFilterId] = useState<number>(0);

  const [sportsIdList, setSportsIdList] = useState<number[]>([id ?? 0]);

  const singleFilter = (id: number) => {
    setFilterId(id);
  };

  const multiFilter = (id: number) => {
    console.log(id);
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
    filterId,
    sportsIdList,
    singleFilter,
    multiFilter
  };
};

export default useCoachFilter;
