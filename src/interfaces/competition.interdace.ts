import { IPaginationRequest } from "./pagination.interface";

export interface ICompetitionRequest extends IPaginationRequest {
  sportId: number;
  continentId?: number;
}
