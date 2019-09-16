import Config from "react-native-config";
import { ApiHelper, IApiResponse } from "../../utils/api-helper";
import { request } from "./../../utils";

const url = `${Config.API_ENDPOINT}/v1/auth/sign_in`;
interface IAuthSignin {
  username: string;
  password: string;
}
class AuthService extends ApiHelper {
  constructor(_url: string) {
    super(_url);
  }
  public async sign_in(body: IAuthSignin): Promise<IApiResponse | void> {
    try {
      const result = await request.post(this.url, { body });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
export const authAPI = new AuthService(url);
