import React from 'react';
import DatePicker from 'react-datepicker';

import InputHint from './forms/InputHint';
import RequiredField from './forms/RequiredField';

import InputProps from './../../models/InputProps';

export default class CustomDatePicker extends React.Component<InputProps, any> {
  state = {
    isRequired: false,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.checkRequired();
  }
  checkRequired() {
    if (this.props.field.validations) {
      const o = this.props.field.validations.filter(v => v.type === 'required');

      if (o) {
        this.setState({
          isRequired: true,
        });
      }
    }
  }
  render() {
    return (
      <div className="form-group">
        <label>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <DatePicker
          selected={
            (this.props.field.value && new Date(this.props.field.value)) || null
          }
          onChange={(v: any) => {
            this.props.field.value = v;
            this.props.form.setFieldValue(this.props.field.name, v);
          }}
          dateFormat="dd/MM/yyyy"
          className={
            this.props.form.errors[this.props.field.name] &&
            this.props.form.touched[this.props.field.name]
              ? 'form-control is-invalid'
              : 'form-control'
          }
        />
        {this.props.form.errors[this.props.field.name] &&
          this.props.form.touched[this.props.field.name] && (
            <InputHint
              message={this.props.form.errors[this.props.field.name]}
            />
          )}
      </div>
    );
  }
}
