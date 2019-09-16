import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import { inject, observer } from "mobx-react";
import { Container, Modal, ScreenContainer, Text } from "../components/common";
import { TextButton } from "../components/common/button";
import { FullScreenImage } from "../components/common/image";
import Image from "../components/common/image/Image";
import { AlertMessage } from "../components/common/message";
import { colorSet, containerLayoutV, IMAGES, sizeSet } from "../constants";
import { IAuthModel } from "../modules/auth";

interface ISplashScreen {
  screenProps: any;
  navigation: NavigationScreenProp<any>;
  authStore?: IAuthModel;
}

class SplashScreen extends React.Component<ISplashScreen> {
  public static navigationOptions = ({ navigation }: any) => {
    return {
      header: null,
    };
  };
  public state = { isShowModal: false };
  public async componentDidMount() {
    const { authStore } = this.props;
    try {
      //
    } catch (e) {
      // errorHandler(e);
    }
  }
  public render() {
    return (
      <ScreenContainer padV>
        <FullScreenImage src={IMAGES.bgSplashScreen} />
        <Container flex={5}>
          <Image src={IMAGES.logoSplashScreen} size={150} />
          <Text size={sizeSet.xl} special color={colorSet.highlight}>
            FMDT
          </Text>
          <Text>เปิดประตูเยี่ยมบ้าน</Text>
          <Text>สร้างสะพานสู่สวัสดิการสังคม</Text>
        </Container>
        <Container flex={2} fluid layoutV={containerLayoutV.spaceAround}>
          <TextButton
            title={"เข้าสู่ระบบ"}
            onPress={this.goToLogin}
            invert
            oval
            style={styles.textButtonStyle}
            stretch
          />
          <TextButton
            title={"ต้องการความช่วยเหลือ"}
            onPress={() => this.setModal(true)}
            color={colorSet.primary}
            oval
            style={styles.textButtonStyle}
            stretch
          />
        </Container>
        <Container flex={0.5} layoutV={containerLayoutV.bottom}>
          <Text size={sizeSet.s}>2019 DSDW All Right Reserved</Text>
        </Container>
        {this.renderCallForHelpModal()}
      </ScreenContainer>
    );
  }

  private goToLogin = () => {
    if (this.props.authStore!.token) {
      this.props.navigation.navigate("CaseList");
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  private renderCallForHelpModal = () => {
    return (
      <Modal
        isVisible={this.state.isShowModal}
        onBackdropPress={() => this.setModal(false)}
        style={styles.modalContainer}
      >
        <AlertMessage
          title={"ขอความช่วยเหลือ"}
          message={"กรุณาติดต่อเจ้าหน้าที่ส่วนกลางค่ะ"}
          onPressOk={() => this.setModal(false)}
        />
      </Modal>
    );
  };

  private setModal = (value: boolean) => {
    this.setState({ isShowModal: value });
  };
}
const styles = StyleSheet.create({
  textButtonStyle: {
    marginBottom: 20,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    margin: 0,
  },
});
export default inject("authStore")(observer(SplashScreen));
