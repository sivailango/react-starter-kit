import React, { Component } from 'react';

import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';

import BlankPageContainer from './BlankPageContainer';
import JsonForm from './JsonForm';

import Header from './../components/layout/Header';
import SideBar from './../components/layout/SideBar';
import SideBarXs from './../components/layout/SideBarXs';
import Footer from './../components/layout/Footer';

interface Props {}
interface State {
  breakPoint: string;
}

export default class LoggedInContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      breakPoint: 'lg',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const innerWidth = window.innerWidth;

    if (innerWidth < 480) {
      this.setState({
        breakPoint: 'sm',
      });
    } else if (innerWidth < 1024) {
      this.setState({
        breakPoint: 'md',
      });
    } else {
      this.setState({
        breakPoint: 'lg',
      });
    }
  }

  render() {
    let sideBar;

    if (this.state.breakPoint === 'sm') {
      sideBar = <SideBarXs {...this.props} />;
    } else if (this.state.breakPoint === 'md') {
      sideBar = <SideBarXs {...this.props} />;
    } else {
      sideBar = <SideBar {...this.props} />;
    }

    return (
      <div>
        <Header {...this.props} />
        {sideBar}
        <div className="page-container">
          <div className="container-fluid">
            <Switch>
              <Route path="/dashboard" exact component={JsonForm} />
              <Route path="/forms/json" exact component={JsonForm} />
              <Route path="/forms/json" exact component={JsonForm} />
              <Route path="/forms/components" exact component={JsonForm} />
              <Route path="/charts" exact component={JsonForm} />
              <Route path="/table/basic" exact component={JsonForm} />
              <Route path="/table/dataTable" exact component={JsonForm} />
              <Route path="/blank" exact component={BlankPageContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
