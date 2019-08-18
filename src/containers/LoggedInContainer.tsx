import React, { Component } from 'react';

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

    // this.updateWindowDimensions();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window);
    console.log(document);

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
        {/* <WrappedComponent isLoading={this.props.projects.loading}>     */}
        <Header {...this.props} />
        {/* </WrappedComponent> */}
        {sideBar}
        <div className="page-container">
          <div className="container-fluid">
            <div>Blank Page</div>
          </div>
        </div>
      </div>
    );
  }
}
