import { filterList } from "@/data/sportsList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCoachFilter = () => {
  // TODO: searchParams가 변경된다고 상태가 재렌더링이 되지 않는걸로 블로그쓰기
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState<string>(
    searchParams.get("sort") ?? "latest"
  );
  const [idListSports, setIdListSports] = useState<number[]>(
    searchParams.get("sportsIds")?.split(",").map(Number) ?? []
  );

  const singleFilter = (id: number) => {
    const a =
      filterList.find((filter) => filter.id === id)?.parameter ?? "latest";
    searchParams.set("sort", a);
    setSort(a);
  };

  const multiFilter = (id: number) => {
    const sportsIds =
      searchParams.get("sportsIds")?.split(",").map(Number) ?? [];

    let newSportsIds: number[];

    if (sportsIds.includes(id)) {
      if (sportsIds.length >= 2) {
        newSportsIds = sportsIds.filter((sportId) => sportId !== id);
      } else {
        newSportsIds = [];
      }
    } else {
      if (id === 0) {
        newSportsIds = [];
      } else {
        newSportsIds = [...sportsIds, id];
      }
    }

    if (newSportsIds.length === 0) {
      searchParams.delete("sportsIds");
    } else {
      searchParams.set("sportsIds", newSportsIds.join(","));
    }
    const a = searchParams.get("sportsIds")?.split(",").map(Number) ?? [];
    setIdListSports(a);
  };

  const reflectChangesToUrl = () => {
    setSearchParams(searchParams);
  };

  return {
    singleFilter,
    multiFilter,
    reflectChangesToUrl,
    sort,
    idListSports
  };
};

export default useCoachFilter;
