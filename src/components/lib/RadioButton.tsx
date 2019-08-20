import React from 'react';
import { FieldArray } from 'formik';

import classNames from 'classnames';

import InputHint from './forms/InputHint';
import RequiredField from './forms/RequiredField';

import InputProps from 'models/InputProps';
import InputOption from 'models/InputOption';

interface State {
  position: string;
  isRequired?: boolean;
}

class RadioButton extends React.Component<InputProps, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      position: 'inline',
    };
  }

  componentDidMount() {
    this.setPosition();
    this.checkRequired();
  }

  checkRequired() {
    if (this.props.field.validations) {
      const o = this.props.field.validations.filter(v => v.type === 'required');

      if (o) {
        this.setState({
          isRequired: true,
        });
      }
    }
  }

  setPosition() {
    if (this.props.field.position) {
      this.setState({
        position: this.props.field.position,
      });
    }
  }
  render() {
    return (
      <div className={this.props.classes}>
        <label htmlFor={this.props.field.id} className={this.props.lClass}>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <FieldArray
          name={this.props.field.name}
          render={arrayHelpers => (
            <div className={this.props.dClass}>
              {this.props.field.options!.map((o: InputOption) => (
                <div key={o.id} className={`rb ${this.state.position}`}>
                  <label>
                    <input
                      name={this.props.field.name}
                      id={o.id}
                      type="radio"
                      value={o.id}
                      checked={this.props.form.values[
                        this.props.field.name
                      ].includes(o.id)}
                      onChange={this.props.form.handleChange}
                    />
                    {o.label}
                  </label>
                </div>
              ))}
              {this.props.form.errors[this.props.field.name] &&
                this.props.form.touched[this.props.field.name] && (
                  <InputHint
                    message={this.props.form.errors[this.props.field.name]}
                  />
                )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default RadioButton;
