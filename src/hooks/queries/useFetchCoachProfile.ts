import { getCoachProfile } from "@/api/auth.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ICoachDetail } from "@/models/coach.model";

const useFetchCoachProfile = (isCoach: boolean) => {
  const {
    data: coachProfile,
    isError: isFetchError,
    isLoading,
    error
  } = useQuery<ICoachDetail, AxiosError>({
    queryKey: ["getCoachProfile"],
    queryFn: getCoachProfile,
    enabled: isCoach,
    retry: 3
  });

  return { coachProfile, isFetchError, isLoading, error };
};

export default useFetchCoachProfile;
