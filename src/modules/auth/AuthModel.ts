import { applySnapshot, flow, types } from "mobx-state-tree";
import { AsyncStorage } from "react-native";
import { LatLng } from "react-native-maps";
import { IInput } from "../../components/common";
import { getCurrentPosition } from "../../utils";
import { authAPI } from "./AuthService";

export const AuthModel = types
  .model("AuthModel", {
    token: types.maybeNull(types.string),
    username: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    latitude: types.maybeNull(types.string),
    longitude: types.maybeNull(types.string),
    userId: types.maybeNull(types.string),
  })
  .actions((self: any) => ({
    setField: ({ fieldName, value }: IInput) => {
      self[fieldName] = value;
    },
    resetAll: () => {
      applySnapshot(self, {});
    },
  }));
export type IAuthModel = typeof AuthModel.Type;
export default AuthModel.create();
