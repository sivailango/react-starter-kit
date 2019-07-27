import * as React from 'react';

import { Button } from 'reactstrap';

interface Props {
  className?: string;
  color?: string;
  label?: string;
  disabled?: boolean;
  isBlock?: boolean;
}

interface State {}

export default class UiButton extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Button className={this.props.className} color={this.props.className}>
        {this.props.label}
      </Button>
    );
  }
}
