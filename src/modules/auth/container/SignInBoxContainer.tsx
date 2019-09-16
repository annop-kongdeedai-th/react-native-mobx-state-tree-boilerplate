import { inject, observer } from "mobx-react";
import React from "react";
import { StyleSheet } from "react-native";
import { Container, IInput, keyboardType, TextInput } from "../../../components/common";
import { containerLayoutV, sizeSet } from "../../../constants";
import { IAuthModel } from "../AuthModel";

interface ISignInBoxContainer {
    authStore?: IAuthModel;
    flexContainer?: number;
}

class SignInBoxContainer extends React.Component<ISignInBoxContainer> {
    public render() {
        const { authStore, flexContainer } = this.props;
        return (
            <Container
                flex={flexContainer ? flexContainer : 3}
                layoutV={containerLayoutV.top}
                style={styles.textInputContainer}
            >
                <TextInput
                    placeholder="กรอกรหัสผู้ใช้งาน..."
                    fieldName="username"
                    label="รหัสผู้ใช้งาน"
                    labelHelper={"ได้มากจากไหน ?"}
                    titleHelper={"การขอรหัสรหัสผู้ใช้งาน"}
                    descriptionHelper={"กรุณาติดต่อเจ้าหน้าที่ส่วนกลางเพื่อทำการลงทะเบียนค่ะ"}
                    size={sizeSet.l}
                    value={authStore!.username}
                    setField={authStore!.setField}
                />
                <TextInput
                    placeholder="กรอกรหัสผ่าน..."
                    fieldName="password"
                    label="รหัสผ่าน"
                    password
                    size={sizeSet.l}
                    value={authStore!.password}
                    setField={authStore!.setField}
                />
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    textInputContainer: {
        paddingTop: 30,
    },
});
export default inject("authStore")(observer(SignInBoxContainer));
