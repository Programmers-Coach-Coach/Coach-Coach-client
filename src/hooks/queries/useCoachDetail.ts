import { getCoachDetail } from "@/api/coach.api";
import { useQuery } from "@tanstack/react-query";

const useCoachDetail = (id: number) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["getCoachDetail", id],
    queryFn: () => getCoachDetail(id)
  });

  return { data, isError, isLoading, refetch };
};

export default useCoachDetail;
