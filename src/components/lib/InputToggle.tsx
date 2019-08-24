import * as React from 'react';
import { CustomInput } from 'reactstrap';

import classNames from 'classnames';

export interface IInputToggleProps {}

export default class InputToggle extends React.PureComponent<any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className={this.props.classes}>
        <label className={this.props.lClass}>{this.props.field.title}</label>
        <div className={this.props.dClass}>
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
