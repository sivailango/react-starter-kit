import React from 'react';
import { render } from 'react-dom';

import { Formik, Field, FieldArray } from 'formik';

import Yup from 'yup';

import classNames from 'classnames';

import Checkbox from './Checkbox';
import InputHint from './forms/InputHint';

import RequiredField from './forms/RequiredField';

import InputProps from 'models/InputProps';
import InputOption from 'models/InputOption';

interface State {
  position: string;
  grid?: string;
  containerClass?: string;
  groupClass?: string;
  isRequired?: boolean;
}

class CheckboxGroup extends React.Component<InputProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: 'inline',
    };
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

  componentDidMount() {
    this.setPosition();
    this.checkRequired();
  }

  setPosition() {
    if (this.props.field.position) {
      this.setState({
        position: this.props.field.position,
      });

      if (this.props.field.position === 'grid') {
        this.setState({
          grid: `col-md-${this.props.field.positionGrid}`,
          containerClass: 'row',
        });
      }
    }

    this.setClass();
  }

  setClass() {}
  /*
  handleChange = (event: any) => {
    console.log('asas');
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.id, true);
  };
  */

  render() {
    return (
      <div className={this.props.classes}>
        <label htmlFor={this.props.field.id} className={this.props.lClass}>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <FieldArray
          name={this.props.field.name}
          render={arrayHelpers => (
            <div
              className={`${this.state.containerClass} ${this.props.dClass}`}
            >
              {this.props.field.options!.map((o: InputOption) => (
                <div
                  key={o.id}
                  className={`cb ${this.state.grid} ${this.state.position}`}
                >
                  <input
                    name={this.props.field.name}
                    type="checkbox"
                    id={o.id}
                    value={o.id}
                    checked={this.props.form.values[
                      this.props.field.name
                    ].includes(o.id)}
                    disabled={o.disabled}
                    onChange={e => {
                      if (e.target.checked) {
                        arrayHelpers.push(o.id);
                      } else {
                        const idx = this.props.form.values[
                          this.props.field.name
                        ].indexOf(o.id);
                        arrayHelpers.remove(idx);
                      }
                    }}
                  />
                  <label htmlFor={o.id}>{o.label}</label>
                </div>
              ))}
            </div>
          )}
        />
        {this.props.form.errors[this.props.field.name] &&
          this.props.form.touched[this.props.field.name] && (
            <InputHint
              message={this.props.form.errors[this.props.field.name]}
            />
          )}
      </div>
    );
  }
}

export default CheckboxGroup;
