import React, { Component } from 'react';

interface Props {}
interface State {}

export default class BlankPageContainer extends Component<Props, State> {
  state = {};

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div>Blank Page</div>;
  }
}
