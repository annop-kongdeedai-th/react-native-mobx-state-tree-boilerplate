export const concatQuery = (queries: any) => {
  let queryString = "";
  Object.keys(queries).forEach((key) => {
    const query = `${key}=${queries[key]}`;
    queryString = queryString ? `${queryString}&${query}` : query;
  });
  return queryString;
};
