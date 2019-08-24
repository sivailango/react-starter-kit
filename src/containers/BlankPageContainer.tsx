import React from 'react';

interface Props {}
interface State {}

export default class BlankPageContainer extends React.PureComponent<
  Props,
  State
> {
  state = {};

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div>Blank Page</div>;
  }
}
