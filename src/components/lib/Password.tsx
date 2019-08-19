import React, { Component, Fragment } from 'react';
import { Formik, Field, FieldArray } from 'formik';

import classNames from 'classnames';

import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';

import InputHint from './forms/InputHint';
import RequiredField from './forms/RequiredField';

import InputProps from 'models/InputProps';

export interface IPasswordProps {}

export interface State {
  type: string;
  isRequired?: boolean;
}

export default class Password extends React.Component<InputProps, State> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      type: 'password',
    };

    this.show = this.show.bind(this);
  }

  componentDidMount() {
    this.checkRequired();
  }

  show() {
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input',
    });
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

  public render() {
    let lockIcon;

    if (this.state.type === 'password') {
      lockIcon = <Lock />;
    } else {
      lockIcon = <LockOpen />;
    }

    const cn = classNames({
      'form-group': true,
      'col-md-6': this.props.meta.layout === 'grid',
    });

    return (
      <div className={cn}>
        <label>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <div className="input-group" key={this.props.field.id}>
          <input
            name={this.props.field.name}
            type={this.state.type}
            onChange={this.props.form.handleChange}
            disabled={this.props.field.disabled}
            className={
              this.props.form.errors[this.props.field.name] &&
              this.props.form.touched[this.props.field.name]
                ? 'form-control is-invalid'
                : 'form-control'
            }
          />

          <div className="input-group-append" onClick={this.show}>
            <span className="input-group-text">{lockIcon}</span>
          </div>
        </div>
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
