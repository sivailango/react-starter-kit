import React, { Component } from 'react';

import InputProps from './../../models/InputProps';

import InputText from './InputText';

export default class InputEmail extends Component<InputProps, any> {
  state = {};

  constructor(props: InputProps) {
    super(props);
    this.props.field.validation = {
      pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g,
    };
  }

  render() {
    return <InputText {...this.props} />;
  }
}
