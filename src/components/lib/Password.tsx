import React, { Component, Fragment } from 'react';
import { Formik, Field, FieldArray } from 'formik';

import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';

export interface IPasswordProps {}

export interface State {
  type: string;
}

export default class Password extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: 'password',
    };

    this.show = this.show.bind(this);
  }

  show() {
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input',
    });
  }

  public render() {
    let lockIcon;

    if (this.state.type === 'password') {
      lockIcon = <Lock />;
    } else {
      lockIcon = <LockOpen />;
    }

    return (
      <div className="input-group" key={this.props.field.id}>
        <label>{this.props.field.label}</label>
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

        {this.props.form.errors[this.props.field.name] &&
          this.props.form.touched[this.props.field.name] && (
            <div>{this.props.form.errors[this.props.field.name]}</div>
          )}
      </div>
    );
  }
}
