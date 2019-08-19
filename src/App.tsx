// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import NotFound from 'containers/NotFound';

import LoginContainer from 'containers/LoginContainer';
import BlankPageContainer from 'containers/BlankPageContainer';
import LoggedInContainer from 'containers/LoggedInContainer';
import JsonForm from 'containers/JsonForm';

class App extends Component {
  handleSubmit(values: any) {
    console.log(values);
  }

  onChangeTest() {
    console.log('On Change');
    // this.props.form.setFieldValue(this.props.field.name, e.target.value);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/app" component={LoggedInContainer} />
          {/*
          <LoggedInContainer>
            <Route path="/dashboard" component={BlankPageContainer} />
            <Route path="/blank" component={BlankPageContainer} />
            <Route path="/forms/json" component={JsonForm} />
          </LoggedInContainer>
          */}

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
