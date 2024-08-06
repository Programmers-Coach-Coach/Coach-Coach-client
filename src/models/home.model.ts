import { IPopularCoach } from "./coach.model";
import { ISport } from "./sports.model";

export interface IHomeData {
  sports: ISport[];
  coaches: IPopularCoach[];
}
