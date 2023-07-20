export class ContinentsServices {
  public fetch = async () => {
    const results = await fetch(`https://api.allsportdb.com/v3/continents`, {
      headers: {
        Authorization: "Bearer a69966d8-a69d-4853-91c3-8a4258f99186",
      },
    });
    return await results.json();
  };
}
