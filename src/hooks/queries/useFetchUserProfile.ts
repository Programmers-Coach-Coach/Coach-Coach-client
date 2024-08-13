import { getProfile } from "@/api/auth.api";
import { useQuery } from "@tanstack/react-query";

const useFetchProfile = () => {
  const {
    data: profile,
    isError: isFetchError,
    isLoading
  } = useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile
  });

  return { profile, isFetchError, isLoading };
};

export default useFetchProfile;
