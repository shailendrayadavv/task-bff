export class ContinentsServices {
  private url: string;
  constructor() {
    this.url = "https://api.allsportdb.com/v3/continents";
  }
  public fetch = async () => {
    const results = await fetch(this.url, {
      headers: {
        Authorization: "Bearer a69966d8-a69d-4853-91c3-8a4258f99186",
      },
    });
    return await results.json();
  };
}
