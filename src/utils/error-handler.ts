import { navigationService } from ".";
import appStore from "../AppModel";

const { showToast } = appStore;
const SHOWTOASTONLY = ["001", "012", "404", "003"];
const SILIENT = ["999"];

export function errorHandler(e: Error) {
  if (e.name === "401") {
    showToast!(e.message);
    navigationService.navigate("Login");
  } else if (e.name === "TypeError" && e.message === "Network request failed") {
    e.name = "999";
    errorHandler(e);
  } else if (SHOWTOASTONLY.includes(e.name)) {
    showToast!(e.message);
  } else if (SILIENT.includes(e.name)) {
    //
  } else {
    showToast!(
      `มีข้อผิดพลาดเกิดขึ้น โปรดติดต่อผู้ดูแลระบบ (errorcode: ${
        e.name
      }, message: ${e.message})`,
    );
  }
}
