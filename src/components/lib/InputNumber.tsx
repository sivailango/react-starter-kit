import * as React from 'react';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import InputHint from './forms/InputHint';
import RequiredField from './forms/RequiredField';

interface IAppProps {}

const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: true,
});

export default class InputNumber extends React.Component<any> {
  state = {
    isRequired: false,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.checkRequired();
  }

  checkRequired() {
    if (this.props.field.validations) {
      const o = this.props.field.validations.filter(
        (v: any) => v.type === 'required'
      );

      if (o) {
        this.setState({
          isRequired: true,
        });
      }
    }
  }

  public render() {
    return (
      <div className={this.props.classes}>
        <label htmlFor={this.props.field.id} className={this.props.lClass}>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <div className={this.props.dClass}>
          <MaskedInput
            mask={numberMask}
            id={this.props.field.id}
            placeholder={this.props.field.placeholder}
            type="text"
            className={
              this.props.form.errors[this.props.field.name] &&
              this.props.form.touched[this.props.field.name]
                ? 'form-control is-invalid'
                : 'form-control'
            }
            onChange={this.props.form.handleChange}
          />
          {this.props.form.errors[this.props.field.name] &&
            this.props.form.touched[this.props.field.name] && (
              <InputHint
                message={this.props.form.errors[this.props.field.name]}
              />
            )}
        </div>
      </div>
    );
  }
}
