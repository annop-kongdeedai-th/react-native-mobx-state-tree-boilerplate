import { types } from "mobx-state-tree";

export const AppModel = types
  .model("AppModel", {
    loading: types.boolean,
    show_indicator: types.maybeNull(types.boolean),
    toast_message: types.maybeNull(types.string),
    connected: types.maybeNull(types.boolean),
    isGPSOn: types.maybeNull(types.boolean),
  })
  .actions((self: any) => ({
    toggleLoading: (showIndicator = false) => {
      showIndicator
        ? (self.show_indicator = true)
        : (self.show_indicator = false);
      self.loading = !self.loading;
    },
    setToast: (message?: string) => {
      self.toast_message = message ? message : "";
    },
    showToast: (message: string) => {
      self.setToast(message);
      setTimeout(() => self.setToast(), 3000);
    },
    setConnected: (value: boolean) => {
      self.connected = value;
    },
    setGPS: (value: boolean) => {
      self.isGPSOn = value;
    },
  }));
export type IAppModel = typeof AppModel.Type;
export default AppModel.create({ loading: false });
