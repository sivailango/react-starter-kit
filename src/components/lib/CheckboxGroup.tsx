import React from 'react';
import { render } from 'react-dom';

import { Formik, Field, FieldArray } from 'formik';

import Yup from 'yup';
import Checkbox from './Checkbox';

class CheckboxGroup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

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

  render() {
    return (
      <div>
        <label htmlFor={this.props.field.id}>{this.props.field.label}</label>
        <FieldArray
          name={this.props.field.name}
          render={arrayHelpers => (
            <div>
              {this.props.field.options!.map(o => (
                <div key={o.id}>
                  <label>
                    <input
                      name={this.props.field.name}
                      type="checkbox"
                      value={o.id}
                      checked={this.props.form.values[
                        this.props.field.name
                      ].includes(o.id)}
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
                    />{' '}
                    {o.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}

export default CheckboxGroup;
