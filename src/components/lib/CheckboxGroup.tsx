import React from 'react';
import { render } from 'react-dom';

import { Formik, Field, FieldArray } from 'formik';

import Yup from 'yup';

import classNames from 'classnames';

import Checkbox from './Checkbox';

import InputProps from './../../models/InputProps';
import InputOption from './../../models/InputOption';

interface State {
  position: string;
  grid?: string;
  containerClass?: string;
  groupClass?: string;
}

class CheckboxGroup extends React.Component<InputProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: 'inline',
    };
  }

  componentDidMount() {
    this.setPosition();
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
      <div>
        <label htmlFor={this.props.field.id}>{this.props.field.label}</label>
        <FieldArray
          name={this.props.field.name}
          render={arrayHelpers => (
            <div className={this.state.containerClass}>
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

              {this.props.form.errors[this.props.field.name] &&
                this.props.form.touched[this.props.field.name] && (
                  <div>{this.props.form.errors[this.props.field.name]}</div>
                )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default CheckboxGroup;
