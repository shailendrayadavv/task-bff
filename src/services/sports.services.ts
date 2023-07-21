import { ISportsRequest } from "../interfaces/sports.interface";
import { addDefaultPageParam, addQueryParams } from "../utils/helpers";

export class SportsServices {
  private url: string;
  constructor() {
    this.url = "https://api.allsportdb.com/v3/sports";
  }
  public fetch = async (reqObj: ISportsRequest) => {
    const newReqObj = addDefaultPageParam(reqObj);
    const newUrl = addQueryParams(this.url, newReqObj);
    const response = await fetch(newUrl, {
      headers: {
        Authorization: "Bearer a69966d8-a69d-4853-91c3-8a4258f99186",
      },
    });
    const results = await response.json();
    return await results;
  };
}
