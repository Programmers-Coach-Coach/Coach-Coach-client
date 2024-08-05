import { getHomeData } from "@/api/home.api";
import { IHomeData } from "@/models/home.model";
import { useQuery } from "@tanstack/react-query";

const useHome = () => {
  const { data, isLoading, isError } = useQuery<IHomeData>({
    queryKey: ["getHomeData"],
    queryFn: getHomeData
  });

  return {
    data,
    isLoading,
    isError
  };
};

export default useHome;
