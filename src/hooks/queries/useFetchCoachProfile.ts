import { getCoachProfile } from "@/api/auth.api";
import { useQuery } from "@tanstack/react-query";

const useFetchCoachProfile = () => {
  const {
    data: coachProfile,
    isError: isFetchError,
    isLoading
  } = useQuery({
    queryKey: ["getCoachProfile"],
    queryFn: getCoachProfile
  });

  return { coachProfile, isFetchError, isLoading };
};

export default useFetchCoachProfile;
