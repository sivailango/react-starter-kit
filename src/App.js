// @flow

import React, { Component } from 'react';
import './App.css';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import PageContent from './components/layout/PageContent';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <SideBar />
        <div id="page-container">
          <Header />
          <PageContent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
