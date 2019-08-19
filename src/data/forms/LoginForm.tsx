import FieldConfig from 'models/InputFieldConfig';

export const fields: Array<FieldConfig> = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    name: 'username',
    value: '',
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    name: 'password',
    value: '',
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      }
    ],
  },
];
