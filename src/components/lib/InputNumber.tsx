import * as React from 'react';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

interface IAppProps {}

const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: true,
});

export default class InputNumber extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    const cn = classNames({
      'form-group': true,
      'col-md-6': this.props.meta.layout === 'grid',
    });

    return (
      <div className={cn}>
        <label htmlFor={this.props.field.id}>{this.props.field.label}</label>
        <MaskedInput
          mask={numberMask}
          id={this.props.field.id}
          placeholder={this.props.field.placeholder}
          type="text"
          className="form-control"
          onChange={this.props.form.handleChange}
        />
      </div>
    );
  }
}
