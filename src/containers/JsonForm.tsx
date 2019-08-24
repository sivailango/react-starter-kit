import React, { Component } from 'react';

import * as Yup from 'yup';

import DynamicForm from 'components/lib/DynamicForm';
import FieldConfig from 'models/InputFieldConfig';
import createYupSchema from 'utils/YupSchemaGenerator';

import { fields } from 'data/forms/JsonForm';

import { validateJsonForm, generateYupSchema } from 'utils/Form';
import * as _ from 'lodash';
interface Props {}
interface State {}

export default class JsonForm extends Component<Props> {
  fields: any = [];

  constructor(props: Props) {
    super(props);
    this.fields = validateJsonForm(fields);
  }

  onFormSubmit(values: any) {
    console.log(values);
  }

  render() {
    const validateSchema = generateYupSchema(fields);

    return (
      <div>
        <DynamicForm
          layout="horizontal"
          layoutGrid={4}
          labelPosition="right"
          fields={this.fields}
          validation={validateSchema}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
