import * as React from 'react';
import MaskedInput from 'react-text-mask';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export interface IAppProps {}

const numberMask = createNumberMask({
  prefix: '',
  suffix: ' $',
});

export default class InputNumber extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <MaskedInput
          mask={numberMask}
          id={this.props.field.id}
          placeholder={this.props.field.placeholder}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
}
