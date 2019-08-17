import React, { Component, Fragment } from 'react';
import { Formik, Field, FieldArray } from 'formik';

import FieldConfig from 'models/InputFieldConfig';

import { DisplayFormikState } from './FormikDebug';

// import CheckboxGroup from './CheckboxGroup';
import ReactSelect from './Select';
import Checkbox from './Checkbox';
import CustomDatePicker from './DatePicker';
import Password from './Password';
import InputNumber from './InputNumber';
import InputToggle from './InputToggle';
import InputDecimal from './InputDecimal';
import InputText from './InputText';
import InputEmail from './InputEmail';
import CheckboxGroup from './CheckboxGroup';
import RadioButton from './RadioButton';

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

interface Props {
  fields: Array<FieldConfig>;
  errors?: Array<any>;
  validation?: any;
  onFormSubmit: Function;
}

class DynamicForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  renderFields(inputs: Array<FieldConfig>, form: any) {
    return inputs.map(input => {
      if (input.type === 'select') {
        // DONE
        return this.renderSelect(input);
      }

      if (input.type === 'react_select') {
        // DONE
        return this.renderReactSelect(input, form);
      }
      if (input.type === 'checkbox_group') {
        // DONE
        return this.renderCheckboxes(input, form);
      }
      if (input.type === 'checkbox') {
        // DONE
        return this.renderCheckbox(input, form);
      }
      if (input.type === 'number') {
        // DONE
        return this.renderInputNumber(input, form);
      }
      if (input.type === 'textarea') {
        return this.renderTextarea(input);
      }
      if (input.type === 'password') {
        // DONE
        return this.renderPassword(input, form);
      }
      if (input.type === 'timepicker') {
        return this.renderTimePicker(input);
      }
      if (input.type === 'datepicker') {
        // DONE
        return this.renderDatePicker(input, form);
      }
      if (input.type === 'text') {
        // DONE
        return this.renderTextbox(input, form);
      }
      if (input.type === 'email') {
        // DONE
        return this.renderEmail(input, form);
      }
      if (input.type === 'radio') {
        // DONE
        return this.renderRadioButtons(input, form);
      }
      if (input.type === 'toggle') {
        // DONE
        return this.renderToggle(input, form);
      }

      if (input.type === 'decimal') {
        // DONE
        return this.renderDecimal(input, form);
      }
    });
  }

  renderDecimal(input: FieldConfig, form: any) {
    return <InputDecimal field={input} form={form} />;
  }

  renderInputNumber(input: FieldConfig, form: any) {
    return <InputNumber field={input} form={form} />;
  }

  renderPassword(input: FieldConfig, form: any) {
    return <Password field={input} form={form} />;
  }

  renderToggle(input: FieldConfig, form: any) {
    return <InputToggle field={input} form={form} />;
  }

  renderReactSelect(input: FieldConfig, form: any) {
    return (
      <ReactSelect
        options={input.options}
        value={form.values[input.name]}
        onChange={form.setFieldValue}
        onBlur={form.setFieldTouched}
        error={form.errors[input.name]}
        touched={form.touched[input.name]}
        fieldConfig={input}
        form={form}
        multi={true}
      />
    );
  }

  renderTextbox(input: FieldConfig, form: any) {
    return <InputText field={input} form={form} />;
  }

  renderEmail(input: FieldConfig, form: any) {
    return <InputEmail field={input} form={form} />;
  }

  renderCheckbox(input: FieldConfig, form: any) {
    return <Checkbox field={input} form={form} />;
    /*
    return (
      <FormGroup check key={item.id}>
        <Label check>
          <Field
            component={Checkbox}
            name={item.name}
            id={item.value}
            label={item.label}
          />
        </Label>
      </FormGroup>
    );
    */
  }

  renderCheckboxes(input: FieldConfig, form: any) {
    return <CheckboxGroup field={input} form={form} />;
  }

  renderRadioButtons(input: FieldConfig, form: any) {
    return <RadioButton field={input} form={form} />;
  }

  renderDatePicker(input: FieldConfig, form: any) {
    return (
      <CustomDatePicker
        name={input.name}
        field={input}
        value={form.values[input.name]}
        onChange={form.setFieldValue}
        form={form}
      />
    );
  }

  renderFile(input: FieldConfig) {}

  renderTextarea(input: FieldConfig) {}

  renderTimePicker(input: FieldConfig) {}

  renderDataTimePicker(input: FieldConfig, form: any) {
    return (
      <CustomDatePicker
        name={input.name}
        value={form.values[input.name]}
        onChange={form.setFieldValue}
        form={form}
      />
    );
  }

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
                <div>
                  <select
                    className="form-control"
                    value={field.value}
                    {...field}
                    id={hasError}
                  >
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
      <Formik
        onSubmit={values => {
          this.props.onFormSubmit(values);
        }}
        validationSchema={this.props.validation}
        initialValues={initialValues}
        render={form => {
          console.log(form);
          return (
            <Row>
              <Col sm={{ size: 6 }}>
                <div>
                  <form onSubmit={form.handleSubmit}>
                    {this.renderFields(this.props.fields, form)}
                    <button
                      type="reset"
                      className="btn"
                      onClick={form.handleReset}
                    >
                      Reset
                    </button>
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </Col>
              <Col sm={{ size: 4 }}>
                <DisplayFormikState {...form} />
              </Col>
            </Row>
          );
        }}
      />
    );
  }
}

export default DynamicForm;

/*
https://codesandbox.io/s/q4qx876j
https://codesandbox.io/s/o5pw1vx916
https://codesandbox.io/s/7259y11530
*/
