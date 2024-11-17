import { getUserProfile } from "@/api/profile.api";
import { IProfile } from "@/models/profile.model";
import { IRoutineQuery } from "@/models/routine.model";
import { useQuery } from "@tanstack/react-query";

export const useGetUserProfile = ({ coachId, userId }: IRoutineQuery = {}) => {
  const { data, isLoading, isError } = useQuery<IProfile>({
    queryKey: ["getUserProfile", coachId, userId],
    queryFn: () => getUserProfile({ coachId, userId })
  });

  return {
    data,
    isLoading,
    isError
  };
};
