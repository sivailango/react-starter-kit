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
    name: '',
    arrayIndex: 0,
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

    if (this.props.field.isArrayField) {
      const fNames = this.props.field.name.split('.');
      const name = `${fNames[0]}.${this.props.field.arrayIndex}.${fNames[2]}`;
      this.setState({
        name: name,
        arrayIndex: this.props.field.arrayIndex,
      });
    } else {
      this.setState({
        name: this.props.field.name,
      });
    }
  }

  componentDidCatch() {}

  handleChange(e: any) {
    this.props.form.setFieldValue(this.props.field.name, e.target.value);
    this.props.field.onChange();
  }

  render() {
    let label: any;
    let error: any;
    let classNames: string;

    if (!this.props.field.isArrayField) {
      label = (
        <label className={this.props.lClass} htmlFor={this.props.field.id}>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
      );
      error = this.props.form.errors[this.props.field.name] &&
        this.props.form.touched[this.props.field.name] && (
          <InputHint message={this.props.form.errors[this.props.field.name]} />
        );

      classNames =
        this.props.form.errors[this.props.field.name] &&
        this.props.form.touched[this.props.field.name]
          ? 'form-control is-invalid'
          : 'form-control';
    } else {
      error = this.props.form.errors[this.props.field.arrayFieldName] &&
        this.props.form.errors[this.props.field.arrayFieldName][
          this.state.arrayIndex
        ] &&
        this.props.form.errors[this.props.field.arrayFieldName][
          this.state.arrayIndex
        ][this.props.field.id] &&
        this.props.form.touched[this.props.field.arrayFieldName] &&
        this.props.form.touched[this.props.field.arrayFieldName][
          this.state.arrayIndex
        ] && (
          <InputHint
            message={
              this.props.form.errors[this.props.field.arrayFieldName][
                this.state.arrayIndex
              ][this.props.field.id]
            }
          />
        );

      if (
        this.props.form.errors[this.props.field.arrayFieldName] &&
        this.props.form.errors[this.props.field.arrayFieldName][
          this.state.arrayIndex
        ] &&
        this.props.form.errors[this.props.field.arrayFieldName][
          this.state.arrayIndex
        ][this.props.field.id] &&
        this.props.form.touched[this.props.field.arrayFieldName] &&
        this.props.form.touched[this.props.field.arrayFieldName][
          this.state.arrayIndex
        ]
      ) {
        classNames =
          this.props.form.errors[this.props.field.arrayFieldName][
            this.state.arrayIndex
          ][this.props.field.id] &&
          this.props.form.touched[this.props.field.arrayFieldName][
            this.state.arrayIndex
          ][this.props.field.id]
            ? 'form-control is-invalid'
            : 'form-control';
      } else {
        classNames = 'form-control';
      }
    }

    return (
      <div className={this.props.classes} key={this.props.field.name}>
        {label}
        <Field
          name={this.state.name}
          render={(props: any) => {
            const { field } = props;
            return (
              <div className={this.props.dClass}>
                <input
                  {...field}
                  id={this.state.name}
                  type="text"
                  onChange={this.handleChange}
                  className={classNames}
                />
                {error}
              </div>
            );
          }}
        />
      </div>
    );
  }
}
