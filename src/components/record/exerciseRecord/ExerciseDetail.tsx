import RecordRoutineList from "@/components/routine/RecordRoutineList";
import { ICompletedRoutine } from "@/models/record.model";

interface Props {
  routines: ICompletedRoutine[];
}

const ExerciseDetail = ({ routines }: Props) => {
  return <RecordRoutineList routines={routines} />;
};

export default ExerciseDetail;
