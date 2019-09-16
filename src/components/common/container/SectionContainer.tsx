import * as React from "react";
import { StyleSheet } from "react-native";
import { Container, IContainer, Row } from ".";
import { Icon, Link, Text } from "..";
import {
  rowLayoutH,
  rowLayoutV,
  sizeIconSet,
  sizeSet,
} from "../../../constants";
import { Button } from "../button";
interface ISectionContainer extends IContainer {
  title?: string;
  titleSize?: sizeSet;
  linkLabel?: string;
  onPressLinkLabel?: () => void;
  transparentBg?: boolean;
  contentFluid?: boolean;
}
class SectionContainer extends React.PureComponent<ISectionContainer> {
  public render() {
    const {
      children,
      title,
      linkLabel,
      contentFluid,
      transparentBg,
      onPressLinkLabel,
      ...rest
    } = this.props;
    return (
      <Container flex={1} fluid {...rest}>
        <Container fluid padV>
          <Button
            onPress={onPressLinkLabel}
            stretch
            style={styles.centerContainer}
            disabled={!onPressLinkLabel && !linkLabel ? true : false}
          >
            <Row layoutH={rowLayoutH.spaceBetween} layoutV={rowLayoutV.center}>
              {title ? this.renderTitle() : null}
              {linkLabel ? this.renderLinkLabel() : null}
            </Row>
          </Button>
        </Container>
        <Container
          lightbase={!transparentBg}
          shadow={!transparentBg}
          fluid={contentFluid}
        >
          {children}
        </Container>
      </Container>
    );
  }
  private renderTitle = () => {
    const { title, titleSize } = this.props;
    return <Text size={titleSize || sizeSet.m}>{title}</Text>;
  };
  private renderLinkLabel = () => {
    const { linkLabel } = this.props;
    return (
      <Row layoutH={rowLayoutH.right} style={styles.centerContainer}>
        <Link size={sizeSet.s} title={linkLabel} disabled={true}>
          <Icon size={sizeIconSet.s} name={"angle-right"} />
        </Link>
      </Row>
    );
  };
}
const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SectionContainer;
