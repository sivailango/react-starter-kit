import * as React from 'react';

export interface IInputHintProps {
  message: string;
  error?: string;
  info?: string;
  warning?: string;
}

export default class InputHint extends React.PureComponent<IInputHintProps> {
  /*
  constructor(props: IInputHintProps) {
    super(props);
  }
  */
  public render() {
    return (
      <div>
        <span className="small">{this.props.message}</span>
      </div>
    );
  }
}
