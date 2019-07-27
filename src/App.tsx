// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        name: 'companyName',
        value: 'FSS',
      },
      {
        id: 'country',
        label: 'Country',
        type: 'select',
        name: 'country',
        value: '',
        options: [{ value: '1', label: 'India' }],
      },
    ];
    const commonProps = { myProp1: 'prop1', myProp2: 'prop2' };
    return (
      <div id="page-wrapper">
        <SideBar />
        <div id="page-container">
          <Header />
          <PageContent />
          <Form onSubmit={this.handleSubmit} />
          <SignupForm config={commonProps} />
          <DynamicForm fields={fields} />
          <IButton label="Submit" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(App);
