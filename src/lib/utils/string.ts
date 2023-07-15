import queryString from "query-string";

export const objToURLParams = (obj: Record<string, any>) =>
  queryString.stringify(obj, {
    skipNull: true,
    arrayFormat: "index",
    skipEmptyString: true,
  });
