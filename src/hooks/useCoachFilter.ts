import { filterList } from "@/data/sportsList";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const useCoachFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const singleFilter = (id: number) => {
    const sort =
      filterList.find((filter) => filter.id === id)?.parameter ?? "latest";
    searchParams.set("sort", sort);
    setSearchParams(searchParams);
  };

  const multiFilter = (id: number) => {
    const sportsIds =
      searchParams.get("sportsIds")?.split(",").map(Number) ?? [];

    let newSportsIds: number[];

    if (sportsIds.includes(id)) {
      if (sportsIds.length >= 2) {
        newSportsIds = sportsIds.filter((sportId) => sportId !== id);
      } else {
        toast.error("반드시 한개 이상 선택해주세요");
        return;
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
    setSearchParams(searchParams);
  };

  return {
    singleFilter,
    multiFilter
  };
};

export default useCoachFilter;
