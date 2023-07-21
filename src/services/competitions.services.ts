import { ICompetitionRequest } from "../interfaces/competition.interdace";
import { addDefaultPageParam, addQueryParams } from "../utils/helpers";

export class CompetitionsServices {
  private baseUrl: string;
  constructor() {
    this.baseUrl = "https://api.allsportdb.com/v3/competitions";
  }
  public fetch = async (reqObj: ICompetitionRequest) => {
    if (reqObj.fetchAll) {
      return this.fetchAll(reqObj.sportId);
    }
    const newReqObj = addDefaultPageParam(reqObj);
    const newUrl = addQueryParams(this.baseUrl, newReqObj);
    const results = await fetch(newUrl, {
      headers: {
        Authorization: "Bearer a69966d8-a69d-4853-91c3-8a4258f99186",
      },
    });
    return await results.json();
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
