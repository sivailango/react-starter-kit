import * as React from 'react';
import MaskedInput from 'react-text-mask';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export interface IAppProps {}

const numberMask = createNumberMask({
  prefix: '',
  suffix: ' $',
});

export default class App extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <MaskedInput
          mask={numberMask}
          id="phone"
          placeholder="Enter your phone number"
          type="text"
        />
      </div>
    );
  }
}
