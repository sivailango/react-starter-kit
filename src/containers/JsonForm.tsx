import React, { Component } from 'react';

import * as Yup from 'yup';

import DynamicForm from 'components/lib/DynamicForm';
import FieldConfig from 'models/InputFieldConfig';
import createYupSchema from 'utils/YupSchemaGenerator';

import { fields } from 'data/forms/JsonForm';

import { validateJsonForm } from 'utils/Form';

interface Props {}
interface State {}

export default class JsonForm extends Component<Props, State> {
  state = {};

  onFormSubmit(values: any) {
    console.log(values);
  }

  render() {
    console.log(validateJsonForm(fields));
    const yepSchema = fields.reduce(createYupSchema, {});
    const validateSchema = Yup.object().shape(yepSchema);

    return (
      <div>
        <DynamicForm
          layout="horizontal"
          layoutGrid={4}
          labelPosition="right"
          fields={fields}
          validation={validateSchema}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
