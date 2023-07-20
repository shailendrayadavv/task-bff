export class SportsServices {
  public fetch = async (season: string, page: number) => {
    console.log("service");
    const response = await fetch(
      `https://api.allsportdb.com/v3/sports?page=${page}&season=${season}`,
      {
        headers: {
          Authorization: "Bearer a69966d8-a69d-4853-91c3-8a4258f99186",
        },
      }
    );
    const results = await response.json();
    return await results;
  };
}
