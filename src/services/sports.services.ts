import { ISportsRequest } from "../interfaces/sports.interface";
import { API_PATHS } from "../utils/constants";
import { addDefaultPageParam, addQueryParams } from "../utils/helpers";
import { getApiCall } from "./api";

export class SportsServices {
  private url: string;
  constructor() {
    this.url = API_PATHS.SPORTS;
  }
  public fetch = async (reqObj: ISportsRequest) => {
    const newReqObj = addDefaultPageParam(reqObj);
    const newUrl = addQueryParams(this.url, newReqObj);
    return await getApiCall(newUrl);
  };
}
