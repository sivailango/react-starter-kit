import React, { Component } from 'react';
import { Field, reduxForm, change, InjectedFormProps } from 'redux-form';

import { Alert } from 'reactstrap';

interface Props {}

class Form extends React.Component<InjectedFormProps<any> & Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    let hasError = false;

    return (
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="form-group">
            <Field
              name="username"
              component="input"
              type="text"
              className="form-control form-control-sm"
              id="username"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control form-control-sm"
              id="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <div className="form-group row login-tools">
            <div className="col-6 login-remember">
              <label className="custom-control custom-checkbox">
                <Field
                  className="custom-control-input"
                  component="input"
                  name="remember_me"
                  type="checkbox"
                  value="remember_me"
                />
                <span className="custom-control-label">Remember Me</span>
              </label>
            </div>
          </div>
          <div className="form-group login-submit">
            <button
              type="submit"
              className="btn btn-primary btn-xl"
              data-dismiss="modal"
            >
              Sign me in
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm<any, Props>({
  form: 'form',
})(Form);
