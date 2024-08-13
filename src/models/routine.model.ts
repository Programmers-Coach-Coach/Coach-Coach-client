export interface IRoutine {
  routineId: number;
  routineName: string;
  sportId: number;
}

export interface IRoutines {
  routineList: IRoutine[];
}

export interface IResponseMessage {
  statusCode: number;
  message: string;
}
