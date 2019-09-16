import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

import {inject, observer} from 'mobx-react';
import {IAppModel} from '../AppModel';
import {Container, Row, ScreenContainer, Text} from '../components/common';
import {TextButton} from '../components/common/button';
import {Image} from '../components/common/image';
import {
  colorSet,
  containerLayoutH,
  containerLayoutV,
  IMAGES,
  rowLayoutH,
  rowLayoutV,
  sizeSet,
} from '../constants';
import {IAuthModel} from '../modules/auth';
import {SignInBoxContainer} from '../modules/auth/container';
import {errorHandler} from '../utils';

interface ILoginScreen {
  navigation: NavigationScreenProp<any>;
  authStore: IAuthModel;
  appStore: IAppModel;
}

class LoginScreen extends React.Component<ILoginScreen> {
  public static navigationOptions = ({navigation}: any) => {
    return {
      headerStyle: {
        elevation: 0,
      },
    };
  };
  public render() {
    return (
      <ScreenContainer padV>
        <Container
          flex={2}
          layoutH={containerLayoutH.left}
          layoutV={containerLayoutV.top}>
          <Row layoutH={rowLayoutH.left} layoutV={rowLayoutV.center}>
            <Image circle src={IMAGES.logoSplashScreen2} size={45} />
          </Row>
        </Container>
        <SignInBoxContainer />
        <Container fluid>
          <TextButton
            title={'เข้าสู่ระบบ'}
            color={colorSet.highlight}
            oval
            size={sizeSet.m}
            onPress={this.onSignin}
          />
        </Container>
      </ScreenContainer>
    );
  }

  private validate = () => {
    if (!this.props.authStore.username) {
      this.props.appStore.showToast('กรุณากรอกชื่อผู้ใช้ค่ะ');
      return false;
    } else if (!this.props.authStore.password) {
      this.props.appStore.showToast('กรุณากรอกรหัสผ่านค่ะ');
      return false;
    } else {
      return true;
    }
  };

  private onSignin = async () => {
    if (this.validate()) {
      try {
        this.props.appStore.toggleLoading(true);
        await this.props.authStore!.sign_in();
        this.props.navigation.navigate('CaseList');
      } catch (e) {
        errorHandler(e);
      } finally {
        this.props.appStore.toggleLoading();
      }
    }
  };
}
const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 8,
  },
});
export default inject('authStore', 'appStore')(observer(LoginScreen));
