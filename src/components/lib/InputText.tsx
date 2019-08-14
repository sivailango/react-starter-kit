import React, { Component, Fragment } from 'react';

import { Formik, Field, FieldArray } from 'formik';

import InputProps from './../../models/InputProps';

interface Props {}
interface State {}

export default class InputText extends Component<InputProps, any> {
  state = {};

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    console.log(
      this.props.field.validation.pattern,
      this.props.form.values[this.props.field.name],
      e.target.value
    );

    this.props.form.setFieldValue(this.props.field.name, e.target.value);

    if (!new RegExp(this.props.field.validation.pattern).test(e.target.value)) {
      /*
      this.props.form.errors[this.props.field.name] = 'Invalid Email';
      this.props.form.touched[this.props.field.name] = true;
      */
      e.preventDefault();
    }
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
              // console.log(props);
              return (
                <input
                  {...field}
                  onChange={this.handleChange}
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
