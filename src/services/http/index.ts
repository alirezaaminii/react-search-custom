import {AxiosHttpClient} from "@/utils/http-class";
import {getAPIBaseURL, getAPIMocking} from "@/utils/env";
export const NetworkService = new AxiosHttpClient(
  {},
  getAPIBaseURL() as string,
  getAPIMocking() ? '/mock' : ''
);
