// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';

import * as Yup from 'yup';

import './App.css';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import PageContent from './components/layout/PageContent';
import Footer from './components/layout/Footer';

import BlankPageContainer from './containers/BlankPageContainer';
import LoggedInContainer from './containers/LoggedInContainer';
import NotFound from './containers/NotFound';

import { IButton } from './components/lib/Index';

import Form from './components/lib/Form';
import SignupForm from './components/forms/SignupForm';
import DynamicForm from './components/lib/DynamicForm';

import FieldConfig from './models/InputFieldConfig';

import createYupSchema from './utils/YupSchemaGenerator';

class App extends Component {
  handleSubmit(values: any) {
    console.log(values);
  }

  onChangeTest() {
    console.log('On Change');
    // this.props.form.setFieldValue(this.props.field.name, e.target.value);
  }

  onFormSubmit(values: any) {
    console.log(values);
  }

  render() {
    const fields: Array<FieldConfig> = [
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
      },
      {
        id: 'currency',
        label: 'Currency',
        type: 'number',
        name: 'currency',
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
      },
      {
        id: 'is_agreed',
        label: 'I agree',
        type: 'checkbox',
        name: 'is_agreed',
        value: false,
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
        position: 'vertical',
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
    ];

    const yepSchema = fields.reduce(createYupSchema, {});
    const validateSchema = Yup.object().shape(yepSchema);

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={BlankPageContainer} />
          <LoggedInContainer>
            <Route path="/blank" component={BlankPageContainer} />
          </LoggedInContainer>
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect()(App);

{
  /*
          <Form onSubmit={this.handleSubmit} />
          <PageContent />
          <Footer />
          <DynamicForm
            fields={fields}
            validation={validateSchema}
            onFormSubmit={this.onFormSubmit}
          />
        </div>
      </div>
      */
}
