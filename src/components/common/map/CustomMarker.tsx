import * as React from "react";

import { Text } from "..";

interface ICustomMarker {
  title?: string;
  description?: string;
  other?: string;
  onPress?: () => void;
}
class CustomMarker extends React.PureComponent<ICustomMarker> {
  public render() {
    const { title, description, other } = this.props;
    return (
      <React.Fragment>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{other}</Text>
      </React.Fragment>
    );
  }
}
export default CustomMarker;
