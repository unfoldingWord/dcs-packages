import { RequestParameter } from "ts-gear/lib/type";
import generateRequester from "ts-gear/lib/requester/fetch";
import { Requester } from "ts-gear/lib/type";

export type RequestParameters = {
  basePath?: string;
  host?: string;
  header?: any;
};

const requesterWrapper = (): Requester => {
  const requester = generateRequester({});
  const init = {
    host: "https://git.door43.org",
  };
  return async (url: string, params: RequestParameter & RequestParameters) => {
    const { host } = params;
    const newUrl = host ? host + url : init.host + url;
    return requester(newUrl, { ...params });
  };
};
export const requester: Requester = requesterWrapper();
