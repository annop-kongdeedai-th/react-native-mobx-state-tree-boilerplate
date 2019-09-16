import * as React from "react";

import { Text } from "..";

interface IErrorBoundary {
  component?: JSX.Element;
}
class ErrorBoundary extends React.PureComponent<IErrorBoundary> {
  public state = { hasError: false, errorMessage: "" };

  public componentDidCatch(error: Error) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  public render() {
    return this.state.hasError
      ? this.props.component || <Text>{this.state.errorMessage}</Text>
      : this.props.children;
  }
}
export default ErrorBoundary;
