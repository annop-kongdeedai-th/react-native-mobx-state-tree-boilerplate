import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Button, Text } from "../";
import { COLORS, resizeModeSet, sizeSet } from "../../../constants";
import { ImagesModel } from "../../../modules/share/ImagesModel";
import { Container, Row } from "../container";
import Image from "./Image";

interface IGalleryWrapUp {
  onRemoveImage?: (image: ImagesModel) => void;
  navigation: NavigationScreenProp<any>;
  images: any;
}

class GalleryWrapUp extends React.Component<IGalleryWrapUp> {
  public render() {
    const { images } = this.props;
    return (
      <React.Fragment>
        {images.length === 1 ? this.renderOneImage() : null}
        {images.length === 2 ? this.renderTwoImage() : null}
        {images.length === 3 ? this.renderThreeImage() : null}
        {images.length === 4 ? this.renderFourImage() : null}
        {images.length === 5 ? this.renderFiveImage() : null}
        {images.length > 5 ? this.renderMoreImage() : null}
      </React.Fragment>
    );
  }

  private renderOneImage = () => {
    const { images } = this.props;
    return (
      <Container fluid>
        <Button
          stretch
          onPress={this.onGoToGalleryWrapUpScreen}>
          <Image src={{ uri: images[0].url }} style={styles.oneImage} />
        </Button>
      </Container>
    );
  };
  private renderTwoImage = () => {
    const { images } = this.props;
    return (
      <Row>
        {images.map((item: any, index: any) => {
          return (
            <Container style={styles.rightContainer} flex={1} fluid key={index}>
              <Button
                stretch
                onPress={this.onGoToGalleryWrapUpScreen}>
                <Image
                  src={{ uri: item.url }}
                  style={styles.twoImage}
                  resizeMode={resizeModeSet.cover}
                />
              </Button>
            </Container>
          );
        })}
      </Row>
    );
  };
  private renderThreeImage = () => {
    const { images } = this.props;
    const [img, ...rest] = images;
    return (
      <Row>
        <Container style={styles.rightContainer} flex={2.5} fluid>
          <Button
            stretch
            onPress={this.onGoToGalleryWrapUpScreen}>
            <Image
              src={{ uri: img.url }}
              style={styles.twoImage}
              resizeMode={resizeModeSet.cover}
            />
          </Button>
        </Container>
        <Container style={styles.leftContainer} flex={1.5} fluid>
          {rest.map((item: any, index: any) => {
            return (
              <Container fluid style={styles.bottomContainer} key={index}>
                <Button
                  stretch
                  onPress={this.onGoToGalleryWrapUpScreen}>
                  <Image
                    src={{ uri: item.url }}
                    style={styles.threeImage}
                    resizeMode={resizeModeSet.cover}
                  />
                </Button>
              </Container>
            );
          })}
        </Container>
      </Row>
    );
  };
  private renderFourImage = (): JSX.Element => {
    const { images } = this.props;
    const [img, ...rest] = images;
    return (
      <Row>
        <Container style={styles.rightContainer} flex={2.5} fluid>
          <Button
            stretch
            onPress={this.onGoToGalleryWrapUpScreen}>
            <Image
              src={{ uri: img.url }}
              style={styles.twoImage}
              resizeMode={resizeModeSet.cover}
            />
          </Button>
        </Container>
        <Container style={styles.leftContainer} flex={1.5} fluid>
          {rest.map((item: any, index: any) => {
            return (
              <Container fluid style={styles.bottomContainer} key={index}>
                <Button
                  stretch
                  onPress={this.onGoToGalleryWrapUpScreen}>
                  <Image
                    src={{ uri: item.url }}
                    style={styles.fourImage}
                    resizeMode={resizeModeSet.cover}
                  />
                </Button>
              </Container>
            );
          })}
        </Container>
      </Row>
    );
  };
  private renderFiveImage = (): JSX.Element => {
    const { images } = this.props;
    const [img1, img2, ...rest] = images;
    return (
      <Container fluid>
        <Container style={styles.bottomContainer} flex={2.5} fluid>
          <Row>
            {[img1, img2].map((item: any, index: any) => {
              return (
                <Container fluid flex={1} key={index}>
                  <Button
                    stretch
                    onPress={this.onGoToGalleryWrapUpScreen}>
                    <Image
                      src={{ uri: item.url }}
                      style={styles.fiveImage}
                      resizeMode={resizeModeSet.cover}
                    />
                  </Button>
                </Container>
              );
            })}
          </Row>
        </Container>
        <Container fluid flex={1.5} style={styles.topContainer}>
          <Row>
            {rest.map((item: any, index: any) => {
              return (
                <Container fluid flex={1} key={index}>
                  <Button
                    stretch
                    onPress={this.onGoToGalleryWrapUpScreen}>
                    <Image
                      src={{ uri: item.url }}
                      style={styles.fourImage}
                      resizeMode={resizeModeSet.cover}
                    />
                  </Button>
                </Container>
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  };
  private renderMoreImage = (): JSX.Element => {
    const { images } = this.props;
    const length = images.length;
    const more = length - 5;
    const [img1, img2, img3, img4, img5] = images;
    return (
      <Container fluid>
        <Container fluid flex={2.5} style={styles.bottomContainer}>
          <Row>
            {[img1, img2].map((item: any, index: any) => {
              return (
                <Container fluid flex={1} key={index}>
                  <Button
                    stretch
                    onPress={this.onGoToGalleryWrapUpScreen}>
                    <Image
                      src={{ uri: item.url }}
                      style={styles.fiveImage}
                      resizeMode={resizeModeSet.cover}
                    />
                  </Button>
                </Container>
              );
            })}
          </Row>
        </Container>
        <Container fluid flex={1.5} style={styles.topContainer}>
          <Row>
            {[img3, img4, img5].map((item: any, index: any) => {
              return (
                <Container fluid flex={1} key={index}>
                  <Button
                    stretch
                    onPress={this.onGoToGalleryWrapUpScreen}>
                    <Image
                      src={{ uri: item.url }}
                      style={styles.fourImage}
                      resizeMode={resizeModeSet.cover}
                    />
                    {index === 2 ? (
                      <Container fluid style={styles.transparentView}>
                        <Text
                          color={COLORS.white}
                          style={styles.textContainer}
                          size={sizeSet.l}
                        >
                          +{more}
                        </Text>
                      </Container>
                    ) : null}
                  </Button>
                </Container>
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  };

  private onGoToGalleryWrapUpScreen = () => {
    const { images, onRemoveImage } = this.props;
    this.props.navigation.navigate("GalleryWrapUp", {
      images,
      onRemoveImage,
    });
  }
}
const styles = StyleSheet.create({
  rightContainer: {
    paddingRight: 2,
  },
  leftContainer: {
    paddingLeft: 2,
  },
  bottomContainer: {
    paddingBottom: 2,
  },
  topContainer: {
    paddingTop: 2,
  },
  oneImage: {
    height: 300,
    width: "100%",
  },
  twoImage: {
    height: 250,
    width: "100%",
  },
  threeImage: {
    height: 250 / 2,
    width: "100%",
  },
  fourImage: {
    height: 250 / 3,
    width: "100%",
  },
  fiveImage: {
    height: (250 / 3) * 2,
    width: "100%",
  },
  transparentView: {
    zIndex: 40,
    height: 250 / 3,
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    flex: 1,
    backgroundColor: COLORS.BlackTransparent,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    zIndex: 50,
    position: "absolute",
  },
});
export default GalleryWrapUp;
