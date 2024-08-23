import { getAuth } from "@/api/auth.api";
import { useQuery } from "@tanstack/react-query";

export const useFetchAuth = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getAuth"],
    queryFn: getAuth,
    staleTime: 1000 * 60 * 2
  });

  return { data, isError, isLoading };
};
