import React, { Component } from 'react';

import * as Yup from 'yup';

import DynamicForm from 'components/lib/DynamicForm';
import FieldConfig from 'models/InputFieldConfig';
import createYupSchema from 'utils/YupSchemaGenerator';

import { fields } from 'data/forms/JsonForm';

import { validateJsonForm } from 'utils/Form';
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
    const yepSchema = fields.reduce(createYupSchema, {});

    const a = [
      {
        id: 'siva',
        name: 'siva',
        type: 'text',
        validations: [
          {
            type: 'required',
            params: ['This field is required'],
          },
          {
            type: 'email',
            params: ['Invalid Email format'],
          },
        ],
      },
      {
        id: 'age',
        name: 'age',
        type: 'text',
        validations: [
          {
            type: 'required',
            params: ['This field is required'],
          },
        ],
      },
    ];

    const a1 = a.reduce(createYupSchema, {});
    const a1schema: any = {};
    a1schema['friends'] = Yup.array().of(Yup.object().shape(a1));

    // let a3 = yepSchema + a1schema;

    const mergedSchema = _.merge(yepSchema, a1schema);

    const validateSchema = Yup.object().shape(mergedSchema);

    console.log(validateSchema);

    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      friends: Yup.array().of(
        Yup.object().shape({
          name: Yup.string()
            .min(4, 'too short')
            .required('Required'), // these constraints take precedence
        })
      ),
    });

    console.log(schema);

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
