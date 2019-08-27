import React from 'react';

// import * as Yup from 'yup';

import DynamicForm from 'components/lib/DynamicForm';
import FieldConfig from 'models/InputFieldConfig';

import { fields } from 'data/forms/JsonForm';

import { validateJsonForm, generateYupSchema } from 'utils/Form';
interface Props {}
interface State {}

export default class JsonForm extends React.PureComponent<Props, any> {
  fields: any = [];

  constructor(props: Props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      form: fields,
    };

    this.fields = validateJsonForm(fields);
  }

  onChangeTest() {
    console.log('Hellow');
  }

  changeHandler(e: any) {
    console.log(e.type);
    console.log(fields);
    fields[1].label = 'Siva';
    this.setState({
      form: fields,
    });

    console.log(this.state);
  }

  onFormSubmit(values: any) {
    console.log(values);
  }

  getForm(form: any) {
    console.log(form);
  }

  render() {
    const validateSchema = generateYupSchema(fields);
    console.log(this.state);
    return (
      <div>
        <DynamicForm
          layout="horizontal"
          layoutGrid={4}
          labelPosition="right"
          fields={this.state.form}
          validation={validateSchema}
          onFormSubmit={this.onFormSubmit}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}
