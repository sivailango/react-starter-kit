import React from 'react';
import { Formik, Field, FieldArray } from 'formik';

import classNames from 'classnames';

import * as _ from 'lodash';

import RequiredField from 'components/lib/forms/RequiredField';

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

import { Col, Row } from 'reactstrap';

interface Props {
  fields: Array<FieldConfig>;
  errors?: Array<any>;
  layout?: 'grid' | 'vertical' | 'horizontal' | 'custom';
  layoutGrid?: number;
  validation?: any;
  onFormSubmit: Function;
  labelPosition?: 'left' | 'right';
  changeHandler?: Function;
}

interface State {
  layout: any;
}

class DynamicForm extends React.PureComponent<Props, any> {
  static defaultProps = {
    layout: 'vertical',
    layoutGrid: 12,
    labelPosition: 'left',
  };

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      layout: this.props.layout,
      layoutGrid: this.props.layoutGrid,
    });
  }

  renderField(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string,
    index: number
  ) {
    if (input.type === 'select') {
      return this.renderSelect(input, form, classes, lClass, dClass);
    }

    if (input.type === 'react_select') {
      return this.renderReactSelect(input, form, classes, lClass, dClass);
    }
    if (input.type === 'checkbox_group') {
      return this.renderCheckboxes(input, form, classes, lClass, dClass);
    }
    if (input.type === 'checkbox') {
      return this.renderCheckbox(input, form, classes, lClass, dClass);
    }
    if (input.type === 'number') {
      return this.renderInputNumber(input, form, classes, lClass, dClass);
    }
    if (input.type === 'textarea') {
      return this.renderTextarea(input);
    }
    if (input.type === 'password') {
      return this.renderPassword(input, form, classes, lClass, dClass);
    }
    if (input.type === 'timepicker') {
      return this.renderTimePicker(input);
    }
    if (input.type === 'datepicker') {
      return this.renderDatePicker(input, form, classes, lClass, dClass);
    }
    if (input.type === 'text') {
      return this.renderTextbox(input, form, classes, lClass, dClass, index);
    }
    if (input.type === 'email') {
      return this.renderEmail(input, form, classes, lClass, dClass);
    }
    if (input.type === 'radio') {
      return this.renderRadioButtons(input, form, classes, lClass, dClass);
    }
    if (input.type === 'toggle') {
      return this.renderToggle(input, form, classes, lClass, dClass);
    }

    if (input.type === 'decimal') {
      return this.renderDecimal(input, form, classes, lClass, dClass);
    }
    if (input.type === 'array_fields') {
      return this.renderArray(input, form, classes, lClass, dClass);
    }
  }

  renderFields(
    inputs: Array<FieldConfig>,
    form: any,
    classes: any,
    lClass: string,
    dClass: string,
    index?: number
  ) {
    return inputs.map(input => {
      return this.renderField(input, form, classes, lClass, dClass, index);
    });
  }

  renderArray(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ): any {
    const o = {};

    _.map(input.arrayFields.headers, function(i) {
      return (o[i.key] = '');
    });

    return (
      <FieldArray
        name={input.name}
        render={arrayHelpers => (
          <div>
            <table>
              <thead>
                <tr>
                  {input.arrayFields.headers.map((i: any, index: number) => (
                    <th>
                      {i.label} {i.required && <RequiredField />}
                    </th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {form.values[input.name].map((f: any, rowIndex: number) => (
                  <tr>
                    {input.arrayFields.fields.map((i: any, index: number) => (
                      <td>{this.renderField(i, form, '', '', '', rowIndex)}</td>
                    ))}
                    <td>
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => arrayHelpers.push(o)}
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => arrayHelpers.remove(rowIndex)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      />
    );
  }

  renderDecimal(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return <InputDecimal field={input} form={form} classes={classes} />;
  }

  renderInputNumber(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <InputNumber
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderPassword(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <Password
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderToggle(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <InputToggle
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderReactSelect(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <ReactSelect
        options={input.options}
        value={form.values[input.name]}
        onChange={form.setFieldValue}
        onBlur={form.setFieldTouched}
        error={form.errors[input.name]}
        touched={form.touched[input.name]}
        field={input}
        form={form}
        multi={true}
        meta={this.state}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderTextbox(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string,
    index: number
  ) {
    input.arrayIndex = index;
    return (
      <InputText
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
        onEvent={this.props.changeHandler}
      />
    );
  }

  renderEmail(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <InputEmail
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderCheckbox(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <Checkbox
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderCheckboxes(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <CheckboxGroup
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderRadioButtons(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <RadioButton
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderDatePicker(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <CustomDatePicker
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderFile(input: FieldConfig) {}

  renderTextarea(input: FieldConfig) {}

  renderTimePicker(input: FieldConfig) {}

  renderDataTimePicker(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <CustomDatePicker
        field={input}
        form={form}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
      />
    );
  }

  renderSelect(
    input: FieldConfig,
    form: any,
    classes: any,
    lClass: string,
    dClass: string
  ) {
    return (
      <ReactSelect
        options={input.options}
        value={form.values[input.name]}
        onChange={form.setFieldValue}
        onBlur={form.setFieldTouched}
        error={form.errors[input.name]}
        touched={form.touched[input.name]}
        field={input}
        form={form}
        multi={false}
        meta={this.state}
        classes={classes}
        lClass={lClass}
        dClass={dClass}
        onEvent={this.props.changeHandler}
      />
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

    let formContainerClass = classNames({
      row: this.props.layout === 'grid',
      right: this.props.labelPosition === 'right',
    });

    let cn: any;

    if (this.props.layout === 'grid') {
      cn = classNames({
        'form-group': true,
        [`col-md-${this.props.layoutGrid}`]: true,
      });
    } else if (this.props.layout === 'vertical') {
      cn = classNames({
        'form-group': true,
      });
    } else if (this.props.layout === 'horizontal') {
      cn = classNames({
        'form-group': true,
        row: true,
      });
    }

    let lClass: string;
    let dClass: string;

    if (this.props.layout === 'horizontal') {
      lClass = classNames({
        [`col-md-${this.props.layoutGrid}`]: true,
      });

      const rg = 12 - this.props.layoutGrid;

      dClass = classNames({
        [`col-md-${rg}`]: true,
      });

      formContainerClass = classNames({
        horizontal: true,
        right: this.props.labelPosition === 'right',
      });
    }

    return (
      <Formik
        onSubmit={values => {
          this.props.onFormSubmit(values);
        }}
        validationSchema={this.props.validation}
        initialValues={initialValues}
        render={form => {
          // this.props.getForm(form);
          return (
            <Row>
              <Col sm={{ size: 12 }}>
                <div>
                  <form onSubmit={form.handleSubmit}>
                    <div className={formContainerClass}>
                      {this.renderFields(
                        this.props.fields,
                        form,
                        cn,
                        lClass,
                        dClass
                      )}
                    </div>
                    <div>
                      <button
                        type="reset"
                        className="btn btn-secondary"
                        onClick={form.handleReset}
                      >
                        Reset
                      </button>
                      &nbsp;&nbsp;
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
              <Col sm={{ size: 6 }}>
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
