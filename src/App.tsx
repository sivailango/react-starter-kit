// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Yup from 'yup';

import './App.css';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import PageContent from './components/layout/PageContent';
import Footer from './components/layout/Footer';

import { IButton } from './components/lib/Index';

import Form from './components/lib/Form';
import SignupForm from './components/forms/SignupForm';
import DynamicForm from './components/lib/DynamicForm';

import FieldConfig from './models/InputFieldConfig';

class App extends Component {
  handleSubmit(values: any) {
    console.log(values);
  }
  render() {
    const fields: Array<FieldConfig> = [
      {
        id: 'companyName',
        label: 'First Name',
        type: 'text',
        name: 'companyName',
        value: '',
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
        id: 'is_agreed',
        label: 'I agree',
        type: 'checkbox',
        name: 'is_agreed',
        value: false,
      },
      {
        id: 'category_ids',
        label: 'Languages',
        type: 'checkbox_group',
        name: 'category_ids',
        value: [],
        options: [
          { id: 'en', value: 'en', label: 'English' },
          { id: 'tamil', value: 'tamil', label: 'Tamil' },
        ],
      },
      {
        id: 'radio_country',
        label: 'Languages',
        type: 'radio',
        name: 'radio_country',
        value: '',
        options: [
          { id: 'india', value: 'india', label: 'India' },
          { id: 'us', value: 'us', label: 'US' },
        ],
      },
      {
        id: 'mobiles',
        label: 'Languages',
        type: 'react_select',
        name: 'mobiles',
        value: [],
        options: [
          { value: 'india', label: 'India' },
          { value: 'us', label: 'US' },
          { value: 'uk', label: 'UK' },
        ],
      },
      {
        id: 'start_date',
        label: 'Start Date',
        type: 'datepicker',
        name: 'start_date',
        value: '',
      },
      {
        id: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
        value: '',
      },
      {
        id: 'age',
        label: 'Age',
        type: 'number',
        name: 'age',
      },
      {
        id: 'is_enabled',
        label: 'is_enabled',
        type: 'toggle',
        name: 'is_enabled',
        value: '',
      },
    ];
    const SignupSchema = Yup.object().shape({
      companyName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      start_date: Yup.string().required('Required'),
      mobiles: Yup.array()
        .min(2, 'Pick at least 3 tags')
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          })
        ),
      password: Yup.string().required('Required'),
    });

    const commonProps = { myProp1: 'prop1', myProp2: 'prop2' };
    return (
      <div>
        {/*
          <SideBar />
          <Header />
        */}

        <div>
          {/*
          <Form onSubmit={this.handleSubmit} />
          <PageContent />
          <Footer />
          */}

          <DynamicForm fields={fields} validation={SignupSchema} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
