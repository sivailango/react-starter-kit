import FieldConfig from './../models/InputFieldConfig';

export const fields: Array<FieldConfig> = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
    name: 'firstName',
    // onChange: this.onChangeTest,
    value: '',
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    name: 'email',
    value: '',
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
];
