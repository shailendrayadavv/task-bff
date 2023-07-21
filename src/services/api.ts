import { AUTHORIZATION } from "../utils/constants";

export const getApiCall = async (url: string) => {
  const results = await fetch(url, {
    headers: {
      Authorization: AUTHORIZATION,
    },
  });
  return await results.json();
};
