import * as React from 'react';

import {ActivityIndicator, StyleSheet} from 'react-native';
import {Button as BaseButton, IButton} from '.';
import {COLORS, colorSet, sizeSet} from '../../../constants';
import {Container} from '../container';
import {Text} from '../text';

interface ITextButton extends IButton {
  title: string;
  color?: colorSet;
  oval?: boolean | 'very';
  outline?: boolean;
  invert?: boolean;
  size?: sizeSet;
}

interface ITextButtonStyle {
  backgroundColor?: any;
  textColor?: any;
  borderColor?: any;
  borderRadius?: any;
  borderWidth?: any;
  fontSize?: any;
}

class TextButton extends React.PureComponent<ITextButton> {
  public static defaultProps = {};
  public render() {
    const {title, onPress, stretch, loading, style} = this.props;

    const textButtonStyle: ITextButtonStyle = this.getStyle();
    return (
      <BaseButton onPress={onPress} stretch={stretch}>
        {loading ? (
          this.renderLoading()
        ) : (
          <Container
            padV
            style={[styles.container, styles.shadow, textButtonStyle, style]}>
            <Text
              color={textButtonStyle.textColor}
              size={textButtonStyle.fontSize}>
              {' '}
              {title}
            </Text>
          </Container>
        )}
      </BaseButton>
    );
  }

  private getStyle = () => {
    const {color, oval, invert, size, outline} = this.props;
    const style: ITextButtonStyle = {};
    const _color = color || colorSet.default;
    if (!invert) {
      style.textColor = COLORS.white;
      style.backgroundColor = _color;
      style.borderColor = _color;
    } else {
      style.textColor = _color;
      style.backgroundColor = COLORS.white;
      style.borderColor = COLORS.white;
      if (outline) {
        style.borderColor = _color;
      }
    }
    if (oval) {
      if (oval === 'very') {
        style.borderRadius = 36;
        style.borderWidth = 1;
      } else {
        style.borderRadius = 8;
        style.borderWidth = 1;
      }
    }

    style.fontSize = size;

    return style;
  };

  private renderLoading = () => {
    return (
      <Container style={styles.loading}>
        <ActivityIndicator size="large" />
      </Container>
    );
  };
}
const styles = StyleSheet.create({
  container: {},
  loading: {
    position: 'absolute',
    top: 5,
    bottom: 0,
    right: 0,
    left: 0,
  },
  shadow: {
    borderColor: COLORS.white,
    borderBottomWidth: 0,
    elevation: 2,
  },
});
export default TextButton;
