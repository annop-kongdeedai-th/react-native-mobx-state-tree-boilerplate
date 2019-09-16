import { concatQuery } from ".";
import authStore from "../modules/auth/AuthModel";
export interface IRequestOptions {
  queries?: any;
  body?: {};
}
const request = async (
  method: string,
  endpoint: string,
  options: IRequestOptions,
) => {
  let url = "";
  const requestOptions: RequestInit = {
    method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "access-token": authStore ? authStore.token! : "",
    },
  };
  if (method === "GET") {
    url = options.queries
      ? `${endpoint}?${concatQuery(options.queries)}`
      : endpoint;
  }
  if (method === "POST" || method === "PUT") {
    url = endpoint;
    requestOptions.body = setBody(options.body);
  }
  if (method === "DELETE") {
    url = endpoint;
  }
  try {
    console.log("url", url);
    const res = await fetch(url, requestOptions);
    const resJson = await res.json();
    if (resJson.success) {
      return resJson;
    } else {
      throw {
        name: res.status.toString(),
        message: resJson.errors && resJson.errors.join(),
      };
    }
  } catch (e) {
    throw e;
  }
};
const setBody = (body: any) => {
  return JSON.stringify(body);
};
const get = (endpoint: string, requestOptions: IRequestOptions) =>
  request("GET", endpoint, requestOptions);
const post = (endpoint: string, requestOptions: IRequestOptions) =>
  request("POST", endpoint, requestOptions);
const put = (endpoint: string, requestOptions: IRequestOptions) =>
  request("PUT", endpoint, requestOptions);
const remove = (endpoint: string, requestOptions: IRequestOptions) =>
  request("DELETE", endpoint, requestOptions);
export default { get, post, put, delete: remove };
