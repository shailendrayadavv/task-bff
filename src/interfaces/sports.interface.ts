import { IPaginationRequest } from "./pagination.interface";

export interface ISportsRequest extends IPaginationRequest {
  season: string;
}
