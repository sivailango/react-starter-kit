import * as React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export interface IInputToggleProps {}

export default class InputToggle extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <FormGroup>
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
      </FormGroup>
    );
  }
}
