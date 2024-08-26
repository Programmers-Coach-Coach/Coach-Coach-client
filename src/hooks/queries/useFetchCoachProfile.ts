import { getCoachProfile } from "@/api/auth.api";
import { useQuery } from "@tanstack/react-query";

const useFetchCoachProfile = (isCoach: boolean) => {
  const {
    data: coachProfile,
    isError: isFetchError,
    isLoading
  } = useQuery({
    queryKey: ["getCoachProfile"],
    queryFn: getCoachProfile,
    enabled: isCoach // isCoach가 true일 때만 쿼리를 실행
  });

  return { coachProfile, isFetchError, isLoading };
};

export default useFetchCoachProfile;
