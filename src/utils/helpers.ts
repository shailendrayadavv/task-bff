export const addQueryParams = (
  baseUrl: string,
  reqObj: { [prop: string]: any }
) => {
  baseUrl += "?";
  Object.keys(reqObj).forEach((key) => {
    if (reqObj[key]) {
      baseUrl += `${key}=${reqObj[key]}&`;
    }
  });
  if (baseUrl.charAt(baseUrl.length - 1) === "&") {
    return baseUrl.slice(0, -1);
  }
  return baseUrl;
};

export const addDefaultPageParam = (reqObj: { [prop: string]: any }) => {
  if (!reqObj["page"]) {
    return { ...reqObj, page: 1 };
  } else {
    return reqObj;
  }
};
