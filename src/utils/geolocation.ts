import { PermissionsAndroid } from "react-native";

import Geolocation from "react-native-geolocation-service";
import appStore from "../AppModel";

export const DISABLE_GPS_MESSAGE =
  "ไม่สามารถค้นหาตำแหน่งปัจจุบันได้ กรุณาเปิด GPS เพื่อใช้งานฟังชั่นนี้ค่ะ";
export const NO_GPS_SIGNAL_MESSAGE = "ไม่มีสัญญาน GPS กรุณาลองใหม่อีกครั้ง";

const _getCurrentPosition = (isLast: boolean): Promise<any> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      ({ coords }: Position) => {
        appStore!.setGPS(true);
        resolve(coords);
      },
      (error: PositionError) => {
        if (error.code === 1 || error.code === 2) {
          appStore!.setGPS(false);
          const e = {
            ...error,
            name: "012",
            message: DISABLE_GPS_MESSAGE,
          };
          reject(e);
        }
        if (isLast) {
          if (error.code === 3) {
            appStore!.setGPS(false);
            const e = {
              ...error,
              name: "003",
              message: NO_GPS_SIGNAL_MESSAGE,
            };
            reject(e);
          } else if (error.code === 5) {
            appStore!.setGPS(false);
            const e = {
              ...error,
              name: "012",
              message: DISABLE_GPS_MESSAGE,
            };
            reject(e);
          }
        }
        const err = { error: { ...error, name: error.code } };
        resolve(err);
      },
      isLast ? option2 : option1,
    );
  });
};

const option1 = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 3600000,
};
const option2 = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: 3600000,
};

export const getCurrentPosition = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      let result = await _getCurrentPosition(false);
      if (result.error) {
        result = await _getCurrentPosition(true);
        if (result.error) {
          throw result.error;
        }
      }
      return result;
    }
  } catch (e) {
    throw e;
  }
};
