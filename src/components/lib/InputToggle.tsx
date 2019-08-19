import * as React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

import classNames from 'classnames';

export interface IInputToggleProps {}

export default class InputToggle extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    const cn = classNames({
      'form-group': true,
      [`col-md-${this.props.meta.layoutGrid}`]: true,
    });

    return (
      <div className={cn}>
        <Label>{this.props.field.title}</Label>
        <div>
          <CustomInput
            type="switch"
            id={this.props.field.id}
            name={this.props.field.name}
            onChange={this.props.form.handleChange}
            label={this.props.field.label}
          />
        </div>
      </div>
    );
  }
}
