export class CompetitionsServices {
  public fetch = async (sportId: number, page: number, continentId: number) => {
    const results = await fetch(
      `https://api.allsportdb.com/v3/competitions?page=${page}&sportId=${sportId}&continentId=${continentId}`,
      {
        headers: {
          Authorization: "Bearer a69966d8-a69d-4853-91c3-8a4258f99186",
        },
      }
    );
    return await results.json();
  };
}
