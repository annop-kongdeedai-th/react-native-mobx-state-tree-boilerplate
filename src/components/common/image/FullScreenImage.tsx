import * as React from "react";
import { StyleSheet } from "react-native";
import { resizeModeSet, SCREEN } from "../../../constants";
import Image from "./Image";

interface IFullScreenImage {
    src: any;
}

class FullScreenImage extends React.PureComponent<IFullScreenImage> {
    public render() {
        const { src } = this.props;
        return (
            <Image
                style={styles.image}
                src={src}
                resizeMode={resizeModeSet.stretch}
            />
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: SCREEN.width,
        height: SCREEN.height,
        position: "absolute",
    },
});
export default FullScreenImage;
