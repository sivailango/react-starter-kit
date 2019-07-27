import React, { Component, Fragment } from 'react';
import { Formik, Field } from 'formik';

import FieldConfig from 'models/InputFieldConfig';

interface Props {
  fields: Array<FieldConfig>;
  errors?: Array<any>;
  validation?: any;
}

class DynamicForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  renderFields(inputs: Array<FieldConfig>) {
    return inputs.map(input => {
      if (input.type === 'select') {
        return this.renderSelect(input);
      }
      if (input.type === 'checkbox') {
        return this.renderCheckboxes(input);
      }
      if (input.type === 'textarea') {
        return this.renderTextarea(input);
      }
      if (input.type === 'password') {
        return this.renderSelect(input);
      }
      if (input.type === 'timepicker') {
        return this.renderTimePicker(input);
      }
      if (input.type === 'datepicker') {
        return this.renderDatePicker(input);
      }
      if (input.type === 'text') {
        return this.renderTextbox(input);
      }
    });
  }

  renderTextbox(input: FieldConfig) {
    return (
      <Fragment key={input.id}>
        <label>{input.label}</label>
        <div>
          <Field
            name={input.name}
            render={(props: any) => {
              const { field } = props;
              return <input {...field} type="text" />;
            }}
          />
        </div>
      </Fragment>
    );
  }

  renderCheckboxes(input: FieldConfig) {}

  renderToggle(input: FieldConfig) {}

  renderRadioButtons(input: FieldConfig) {}

  renderDatePicker(input: FieldConfig) {}

  renderFile(input: FieldConfig) {}

  renderTextarea(input: FieldConfig) {}

  renderTimePicker(input: FieldConfig) {}

  renderDataTimePicker(input: FieldConfig) {}

  renderSelect(input: FieldConfig) {
    return (
      <Fragment key={input.name}>
        <label>{input.label}</label>
        <div>
          <Field
            name={input.name}
            render={(props: any) => {
              const { field } = props;
              const { errors, touched } = props.form;
              const hasError =
                errors[input.name] && touched[input.name] ? 'hasError' : '';
              const defaultOption = (
                <option key="default" value="Please Select">
                  Please Select
                </option>
              );
              const options = input.options!.map(i => (
                <option key={i.value} value={i.label}>
                  {' '}
                  {i.label}{' '}
                </option>
              ));
              const selectOptions = [defaultOption, ...options];
              return (
                <div className="dropdown">
                  <select value={field.value} {...field} id={hasError}>
                    {selectOptions}
                  </select>
                </div>
              );
            }}
          />
        </div>
      </Fragment>
    );
  }

  getInitialValues(inputs: any) {
    const initialValues: any = {};

    inputs.forEach((field: any) => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    return initialValues;
  }

  render() {
    const initialValues = this.getInitialValues(this.props.fields);
    return (
      <div>
        <Formik
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={this.props.validation}
          initialValues={initialValues}
          render={form => {
            return (
              <div>
                <form onSubmit={form.handleSubmit}>
                  {this.renderFields(this.props.fields)}
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default DynamicForm;
