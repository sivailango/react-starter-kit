import * as React from 'react';

import MaskedInput from 'react-text-mask';

/*
export interface InputMaskProps {
}
*/

export default class InputMask extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <MaskedInput
        {...field}
        mask={phoneNumberMask}
        id="phone"
        placeholder="Enter your phone number"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.phone && touched.phone ? 'text-input error' : 'text-input'
        }
      />
    );
  }
}
