import React, { Component } from 'react';

import * as Yup from 'yup';

import DynamicForm from 'components/lib/DynamicForm';
import FieldConfig from 'models/InputFieldConfig';
import createYupSchema from 'utils/YupSchemaGenerator';

import { fields } from 'data/forms/JsonForm';

interface Props {}
interface State {}

export default class JsonForm extends Component<Props, State> {
  state = {};

  onFormSubmit(values: any) {
    console.log(values);
  }

  render() {
    const yepSchema = fields.reduce(createYupSchema, {});
    const validateSchema = Yup.object().shape(yepSchema);

    return (
      <div>
        <DynamicForm
          layout="grid"
          layoutGrid={3}
          fields={fields}
          validation={validateSchema}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
