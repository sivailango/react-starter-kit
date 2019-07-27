import React, { Component } from 'react';
import {
  Formik,
  FormikProps,
  FormikActions,
  InjectedFormikProps,
  Form,
  Field,
  ErrorMessage,
  withFormik,
} from 'formik';
import { StringLiteral } from '@babel/types';

interface Props {
  config?: any;
}

interface MyFormValues {
  first_name: string;
  email: string;
  gender: string;
}

export default class SignupForm extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    console.log(props.config);
  }

  handleSubmit = (values: MyFormValues, { props = this.props }) => {
    alert(JSON.stringify(values, null, 2));
    // setSubmitting(false);
    console.log(props);
    return;
  };

  render() {
    return (
      <Formik
        initialValues={{
          first_name: 'Siva',
          email: '',
          gender: '',
        }}
        validate={values => {
          const errors = {
            email: '',
          };
          console.log(errors);

          if (!values.email) {
            errors.email = 'Email Address Required';
          }

          //check if my values have errors
          return errors;
        }}
        onSubmit={(
          values: MyFormValues,
          actions: FormikActions<MyFormValues>
        ) => {
          console.log(values, actions);
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        render={formProps => {
          console.log(formProps);
          return (
            <Form>
              <Field
                type="text"
                name="first_name"
                className="form-control"
                placeholder="First Name"
              />
              <ErrorMessage name="first_name" />

              <Field type="text" name="email" placeholder="Email address" />
              <ErrorMessage name="email" />

              <Field name="gender" component="select" placeholder="Your Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" />

              <button type="submit" disabled={formProps.isSubmitting}>
                Submit Form
              </button>
            </Form>
          );
        }}
      />
    );
  }
}
