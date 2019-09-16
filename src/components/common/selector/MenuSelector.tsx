import * as React from "react";
import { Picker, StyleSheet } from "react-native";
import ModalSelector, { ModalSelectorProps } from "react-native-modal-selector";

import { IInput } from "..";
import { COLORS, colorSet, sizeIconSet } from "../../../constants";
import { Container } from "../container";
import { Icon } from "../icon";
import { Text } from "../text";

export interface ISubMenu {
    label: string;
    // onSelect: (value: any, index: number) => void;
}
interface ISelector {
    title: string;
    subMenu: ISubMenu[];
    backgroundColor?: colorSet;
    titleColor?: colorSet;
    flex?: number;
    onValueChange: (value: string, itemIndex: number) => void;
    style?: any;
}
class MenuSelector extends React.Component<ISelector> {
    public state = { selectedValue: "กรุณาเลือก", textConcat: "" };
    public componentDidMount() {
        // เพิ่มความยาวของ Picker Item ในกรณีที่ Picker มี width ขนาดเล็ก
        // this.createTextConcat();
    }
    public render() {
        const { title, subMenu, style } = this.props;
        const contanierStyle = this.getContainerStyle();
        const titleStyle = this.getTitleStyle();
        return (
            <Container
                fluid
                style={[styles.container, contanierStyle, style]}>
                <Picker
                    hitSlop={{ zIndex: 100, top: 10, bottom: 10, left: 0, right: 0 }}
                    selectedValue={this.state.selectedValue}
                    style={styles.pickerStyle}
                    mode="dropdown"
                    onValueChange={this.onValueChange}>
                    <Picker.Item key={0} label={"-- กรุณาเลือก --"} value={"กรุณาเลือก"} />
                    {subMenu.map((item: ISubMenu, index: number) =>
                        <Picker.Item key={index} label={item.label + this.state.textConcat} value={item.label} />)
                    }
                </Picker>
                <Container fluid style={[styles.textContainerStyle]}>
                    <Text style={[styles.textStyle, titleStyle]}>
                        {title}
                    </Text>
                </Container>
                <Container fluid bg={contanierStyle.backgroundColor} style={styles.iconAbsoluteStyle}>
                    <Icon
                        name="sort-down"
                        size={sizeIconSet.l}
                        color={COLORS.white}
                    // style={styles.iconAbsoluteStyle}
                    />
                </Container>
            </Container>
        );
    }
    private getContainerStyle = () => {
        const { flex, backgroundColor } = this.props;
        const style: any = {};
        if (flex) {
            style.flex = flex;
        }
        if (backgroundColor) {
            style.backgroundColor = backgroundColor;
        }
        return style;
    }
    private getTitleStyle = () => {
        const { titleColor } = this.props;
        const style: any = {};
        if (titleColor) {
            style.color = titleColor;
        }
        return style;
    }
    private onValueChange = (value: any, index: number) => {
        // this.setState({ selectedValue: value });
        this.props.onValueChange(value, index);
    };
    private createTextConcat = () => {
        const subMenu = this.props.subMenu;
        const suitableWidth = 25;
        let maxLength = 0;
        subMenu.forEach((value: ISubMenu, index: number) => {
            maxLength = value.label.length > maxLength ? value.label.length : maxLength;
        });
        if (maxLength < suitableWidth) {
            const textConcat = " ".repeat(suitableWidth - maxLength);
            this.setState({ textConcat });
        }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colorSet.default,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        height: 50,
        flex: 1,
    },
    pickerStyle: {
        color: colorSet.transparent,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        height: "100%",
        transform: [
            { scaleX: 1 },
            { scaleY: 1 },
            { translateX: 15 },
        ],
    },
    iconAbsoluteStyle: {
        right: 4,
        bottom: 15,
        position: "absolute",
    },
    textContainerStyle: {
        right: 48,
        bottom: 13,
        position: "absolute",
        zIndex: -1,
    },
    textStyle: {
        color: COLORS.white,
    },
});
export default MenuSelector;
