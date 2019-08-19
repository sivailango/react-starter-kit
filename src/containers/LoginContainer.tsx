import React, { Component } from 'react';

import * as Yup from 'yup';

import DynamicForm from 'components/lib/DynamicForm';
import FieldConfig from 'models/InputFieldConfig';
import createYupSchema from 'utils/YupSchemaGenerator';

import { fields } from 'data/forms/LoginForm';

interface Props {}
interface State {}

export default class LoginContainer extends Component<Props, State> {
  state = {};

  onFormSubmit(values: any) {
    console.log(values);
  }

  render() {
    const yepSchema = fields.reduce(createYupSchema, {});
    const validateSchema = Yup.object().shape(yepSchema);

    return (
      <div className="h-100 row justify-content-center">
        <div className="col-12 col-md-5 col-xl-4">
          <DynamicForm
            fields={fields}
            validation={validateSchema}
            onFormSubmit={this.onFormSubmit}
          />
        </div>
      </div>
    );
  }
}
