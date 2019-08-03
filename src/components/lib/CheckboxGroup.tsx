import React from 'react';
import { render } from 'react-dom';
import { Formik, Field } from 'formik';
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
    // take care of touched
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const { value, error, touched, label, className, children } = this.props;

    /*
    const classes = classNames(
      'input-field',
      {
        'is-success': value || (!error && touched), // handle prefilled or user-filled
        'is-error': !!error && touched,
      },
      className
    );
    */
    /*
    {
      React.Children.map(children, child => {
        console.log(child);
      });
    }
    */

    return (
      <div>
        <fieldset>
          <legend>{label}</legend>
          {/*}
          {this.props.options.map((o: any) => {
            return o;
          })}*/}
          {React.Children.map(children, child => {
            return React.cloneElement(child as React.ReactElement<any>, {
              field: {
                value: 'tamil',
                onChange: this.handleChange,
                onBlur: this.handleBlur,
              },
            });
          })}
        </fieldset>
      </div>
    );
  }
}

export default CheckboxGroup;
