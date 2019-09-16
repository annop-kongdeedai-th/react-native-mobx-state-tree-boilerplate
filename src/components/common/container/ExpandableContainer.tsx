import React from "react";
import { StyleSheet } from "react-native";
import { Container, IContainer, Row } from ".";
import { Button, Icon, Text } from "..";
import {
  colorSet,
  containerLayoutH,
  containerLayoutV,
  frameSet,
  rowLayoutH,
  rowLayoutV,
  sizeIconSet,
  sizeSet,
} from "../../../constants";

interface IExpandableContainer extends IContainer {
  initValue?: boolean;
  title?: string;
  iconName?: string;
  editMode?: boolean;
  onToggleSelect?: (select: boolean) => void;
}

class ExpandableContainer extends React.PureComponent<IExpandableContainer> {
  public state = { showChidren: false, isSelect: false };
  public componentDidMount() {
    const { initValue } = this.props;
    if (initValue !== undefined) {
      this.setState({ isSelect: initValue });
    }
  }
  public render() {
    const { children, editMode } = this.props;
    return (
      <Container flex={1} fluid>
        <Container padV lightbase shadow>
          {editMode ? this.renderHeaderEditMode() : this.renderHeaderViewMode()}
        </Container>
        {this.state.showChidren ? (
          <Container padV lightbase>
            {children}
          </Container>
        ) : null}
      </Container>
    );
  }
  private renderHeaderViewMode = () => {
    const { title, iconName } = this.props;
    return (
      <Button
        stretch
        onPress={() => {
          this.onToggleChidren();
        }}
      >
        <Row layoutH={rowLayoutH.spaceBetween} layoutV={rowLayoutV.center}>
          {title ? this.renderTitle() : null}
          <Row layoutH={rowLayoutH.right} style={styles.rowContainer}>
            {iconName ? this.renderRightIcon() : null}
          </Row>
        </Row>
      </Button>
    );
  };
  private renderHeaderEditMode = () => {
    const { title, iconName } = this.props;
    return (
      <Button
        stretch
        onPress={() => {
          this.onToggleChidren();
        }}
      >
        <Row layoutH={rowLayoutH.spaceBetween} layoutV={rowLayoutV.center}>
          {title ? this.renderTitle() : null}
          <Row layoutH={rowLayoutH.right}>
            {iconName ? this.renderRightIcon() : null}
            <Button
              stretch
              onPress={() => {
                this.onToggleSelect();
              }}
            >
              {this.renderSelectIcon()}
            </Button>
          </Row>
        </Row>
      </Button>
    );
  };
  private renderTitle = () => {
    const { title } = this.props;
    return (
      <Row layoutH={rowLayoutH.left} style={{ flex: 1 }}>
        <Container
          layoutV={containerLayoutV.top}
          layoutH={containerLayoutH.left}
          fluid
          flex={1}
        >
          <Icon size={sizeIconSet.m} name={"bars"} color={colorSet.highlight} />
        </Container>

        <Container layoutH={containerLayoutH.left} fluid flex={5}>
          <Text size={sizeSet.m} color={colorSet.highlight}>
            {title}
          </Text>
        </Container>
      </Row>
    );
  };

  private renderRightIcon = () => {
    const { iconName } = this.props;
    return (
      <Icon size={sizeIconSet.m} name={iconName!} color={colorSet.highlight} />
    );
  };
  private renderSelectIcon = () => {
    return (
      <Container fluid style={styles.selectIconStyle}>
        {this.state.isSelect ? (
          <Icon
            size={sizeIconSet.s}
            name={"check"}
            frame={frameSet.circle}
            paintFrame
            color={colorSet.success}
          />
        ) : (
          <Icon
            size={sizeIconSet.s}
            name={"plus"}
            frame={frameSet.circle}
            paintFrame
          />
        )}
      </Container>
    );
  };
  private onToggleSelect = async () => {
    await this.setState({ isSelect: !this.state.isSelect });
    if (this.props.onToggleSelect) {
      this.props.onToggleSelect!(this.state.isSelect);
    }
  };
  private onToggleChidren = () => {
    this.setState({ showChidren: !this.state.showChidren });
  };
}
const styles = StyleSheet.create({
  selectIconStyle: {
    paddingLeft: 10,
  },
  rowContainer: {
    paddingLeft: 20,
  },
});
export default ExpandableContainer;
