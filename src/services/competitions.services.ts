import { ICompetitionRequest } from "../interfaces/competition.interdace";
import { API_PATHS } from "../utils/constants";
import { addDefaultPageParam, addQueryParams } from "../utils/helpers";
import { getApiCall } from "./api";

export class CompetitionsServices {
  private baseUrl: string;
  constructor() {
    this.baseUrl = API_PATHS.COMPETITIONS;
  }
  public fetch = async (reqObj: ICompetitionRequest) => {
    if (reqObj.fetchAll) {
      return this.fetchAll(reqObj.sportId);
    }
    const newReqObj = addDefaultPageParam(reqObj);
    const newUrl = addQueryParams(this.baseUrl, newReqObj);
    return await getApiCall(newUrl);
  };
  public fetchAll = async (sportId: number) => {
    let page = 1;
    let allFetched = false;
    let competitions: any[] = [];
    while (!allFetched) {
      const data = await this.fetch({ sportId, page });
      if (data.length < 10) {
        allFetched = true;
      }
      competitions = [...competitions, ...data];
      page += 1;
    }
    return competitions;
  };
}
