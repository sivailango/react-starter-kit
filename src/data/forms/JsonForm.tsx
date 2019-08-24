import FieldConfig from 'models/InputFieldConfig';

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
  {
    id: 'dob',
    label: 'DOB',
    type: 'datepicker',
    name: 'dob',
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
      },
    ],
  },
  {
    id: 'currency',
    label: 'Currency',
    type: 'number',
    name: 'currency',
    value: '',
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'country',
    label: 'Country',
    type: 'select',
    name: 'country',
    value: '',
    options: [
      { id: '1', value: '1', label: 'India' },
      { id: '2', value: '2', label: 'UK' },
    ],
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'countries',
    label: 'Countries you have been?',
    type: 'react_select',
    name: 'countries',
    value: [],
    options: [
      { value: 'india', label: 'India' },
      { value: 'us', label: 'US' },
      { value: 'uk', label: 'UK' },
    ],
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'is_agreed',
    label: 'I agree',
    type: 'checkbox',
    name: 'is_agreed',
    value: false,
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'languages_known',
    label: 'Languages Known?',
    type: 'checkbox_group',
    name: 'languages_known',
    position: 'grid',
    positionGrid: 4,
    value: [],
    options: [
      { id: 'en', value: 'en', label: 'English', disabled: true },
      { id: 'tamil', value: 'tamil', label: 'Tamil' },
      { id: 'telugu', value: 'telugu', label: 'Telugu' },
    ],
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'current_country',
    label: 'Current Country?',
    type: 'radio',
    name: 'current_country',
    value: '',
    position: 'inline',
    options: [
      { id: 'india', value: 'india', label: 'India' },
      { id: 'us', value: 'us', label: 'US' },
    ],
    validations: [
      {
        type: 'required',
        params: ['This field is required'],
      },
    ],
  },
  {
    id: 'is_enabled',
    label: 'is_enabled',
    type: 'toggle',
    name: 'is_enabled',
    value: '',
    title: 'Is Agreed?',
  },
  {
    id: 'friends',
    label: 'is_enabled',
    type: 'array_fields',
    name: 'friends',
    value: [{ name: '', age: '' }],
    arrayFields: {
      headers: [
        { label: 'Name', grid: 3, key: 'name', required: true },
        { label: 'Age', grid: 3, key: 'age', required: false },
      ],
      fields: [
        {
          name: 'name',
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
          name: 'age',
          type: 'text',
        },
      ],
    },
  },
];
