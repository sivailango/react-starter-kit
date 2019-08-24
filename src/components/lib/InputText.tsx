import React from 'react';

import { Field } from 'formik';

import classNames from 'classnames';

import InputHint from './forms/InputHint';
import RequiredField from './forms/RequiredField';

import InputProps from 'models/InputProps';

import * as _ from 'lodash';

export default class InputText extends React.Component<InputProps, any> {
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

  componentDidCatch() {}

  handleChange(e: any) {
    this.props.form.setFieldValue(this.props.field.name, e.target.value);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return _.isEqual(this.props, nextProps);
  }

  render() {
    let label: any;

    console.log(this.props.field.arrayIndex);

    // console.log(this.props.field);

    if (!this.props.field.isArrayField) {
      label = (
        <label className={this.props.lClass} htmlFor={this.props.field.id}>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
      );
    } else {
    }

    return (
      <div className={this.props.classes} key={this.props.field.name}>
        {label}
        <Field
          name={this.props.field.name}
          render={(props: any) => {
            const { field } = props;
            return (
              <div className={this.props.dClass}>
                <input
                  {...field}
                  id={this.props.field.name}
                  onChange={this.props.form.handleChange}
                  type="text"
                  className={
                    this.props.form.errors[this.props.field.name] &&
                    this.props.form.touched[this.props.field.name]
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                />
                {this.props.form.touched[this.props.field.name] && (
                  <InputHint
                    message={this.props.form.errors[this.props.field.name]}
                  />
                )}
                {/*
                  this.props.field.isArrayField
                  ? this.props.form.errors[this.props.field.arrayFieldName] &&
                    this.props.form.errors[this.props.field.arrayFieldName][
                      this.props.field.arrayIndex
                    ] &&
                    this.props.form.errors[this.props.field.arrayFieldName][
                      this.props.field.arrayIndex
                    ][this.props.field.id] &&
                    this.props.form.touched[this.props.field.arrayFieldName][
                      this.props.field.arrayIndex
                    ][this.props.field.id] && (
                      <InputHint
                        message={
                          this.props.form.errors[
                            this.props.field.arrayFieldName
                          ][this.props.field.arrayIndex][this.props.field.id]
                        }
                      />
                    )
                  : this.props.form.errors[this.props.field.name] &&
                    this.props.form.touched[this.props.field.name] && (
                      <InputHint
                        message={this.props.form.errors[this.props.field.name]}
                      />
                    )
                */}
              </div>
            );
          }}
        />
      </div>
    );
  }
}
