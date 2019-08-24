import React, { Fragment } from 'react';

interface Props {}
interface State {}

export default class RequiredField extends React.PureComponent<Props, State> {
  state = {};

  render() {
    return (
      <Fragment>
        <span className="required">&#42;</span>
      </Fragment>
    );
  }
}
