import React, { Component, Fragment } from 'react';

import { Formik, Field, FieldArray } from 'formik';

import InputHint from './forms/InputHint';
import RequiredField from './forms/RequiredField';

import InputProps from 'models/InputProps';

export default class InputText extends Component<InputProps, any> {
  state = {
    isRequired: false,
  };

  constructor(props: InputProps) {
    super(props);
    this.checkDisabled();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.checkRequired();
  }

  checkDisabled() {
    if (!this.props.field.disabled) {
      this.props.field.disabled = false;
    }
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

  handleChange(e: any) {
    this.props.form.setFieldValue(this.props.field.name, e.target.value);

    /*
    if (!new RegExp(this.props.field.validation.pattern).test(e.target.value)) {
      e.preventDefault();
    }
    */
  }

  render() {
    return (
      <div className="form-group" key={this.props.field.id}>
        <label>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <Field
          name={this.props.field.name}
          render={(props: any) => {
            const { field } = props;
            return (
              <input
                {...field}
                onChange={this.props.form.handleChange}
                type="text"
                className={
                  this.props.form.errors[this.props.field.name] &&
                  this.props.form.touched[this.props.field.name]
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
              />
            );
          }}
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
