import React, { Component, Fragment } from 'react';

import { Formik, Field, FieldArray } from 'formik';

import InputProps from './../../models/InputProps';

export default class InputText extends Component<InputProps, any> {
  state = {};

  constructor(props: any) {
    super(props);
    this.checkDisabled();
    this.handleChange = this.handleChange.bind(this);
  }

  checkDisabled() {
    if (!this.props.field.disabled) {
      this.props.field.disabled = false;
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
      <Fragment key={this.props.field.id}>
        <label>{this.props.field.label}</label>
        <div>
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
              <div>{this.props.form.errors[this.props.field.name]}</div>
            )}
        </div>
      </Fragment>
    );
  }
}
