import { getHomeData, getPopularCoaches, getSports } from "@/api/home.api";
import { IPopularCoach } from "@/models/coach.model";
import { IHomeData } from "@/models/home.model";
import { ISport } from "@/models/sports.model";
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

export const useGetPopularCoaches = () => {
  const { data, isLoading, isError } = useQuery<IPopularCoach[]>({
    queryKey: ["getPopularCoaches"],
    queryFn: getPopularCoaches
  });

  return {
    data,
    isLoading,
    isError
  };
};

export const useGetSports = () => {
  const { data, isLoading, isError } = useQuery<ISport[]>({
    queryKey: ["getSports"],
    queryFn: getSports
  });

  return {
    data,
    isLoading,
    isError
  };
};
