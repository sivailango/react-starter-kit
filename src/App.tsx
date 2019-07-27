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

class App extends Component {
  handleSubmit(values: any) {
    console.log(values);
  }
  render() {
    return (
      <div id="page-wrapper">
        <SideBar />
        <div id="page-container">
          <Header />
          <PageContent />
          <Form onSubmit={this.handleSubmit} />
          <SignupForm />
          <IButton label="Submit" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(App);
