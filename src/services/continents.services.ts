import { API_PATHS } from "../utils/constants";
import { getApiCall } from "./api";

export class ContinentsServices {
  private url: string;
  constructor() {
    this.url = API_PATHS.CONTINENT;
  }
  public fetch = async () => {
    return await getApiCall(this.url);
  };
}
