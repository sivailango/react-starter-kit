import React, { Component, Fragment } from 'react';

interface Props {}
interface State {}

export default class RequiredField extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Fragment>
        <span className="required">&#42;</span>
      </Fragment>
    );
  }
}
