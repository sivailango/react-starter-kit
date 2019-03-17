import React, { Component } from 'react';

import { Collapse } from 'reactstrap';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { activeSubMenu: 0 };
  }

  toggle(e) {
    console.log(e);
    if (this.state.activeSubMenu === e) {
      this.setState(state => ({
        activeSubMenu: 0,
      }));
    } else {
      this.setState(state => ({
        activeSubMenu: e,
      }));
    }
  }

  render() {
    return (
      <div id="sidebar">
        <div>
          <a className="logo text-center">Logo</a>
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link" onClick={() => this.toggle(1)}>
                <i className="nav-link-icon mdi mdi-home-outline" /> Home{' '}
                <i className="mdi mdi-chevron-right" />
              </a>
              <Collapse isOpen={this.state.activeSubMenu === 1}>
                <ul className="sidebar-nav-submenu">
                  <li className="sidebar-nav-item">
                    <a className="sidebar-nav-link">Sub Menu 1</a>
                  </li>
                  <li className="sidebar-nav-item">
                    <a className="sidebar-nav-link">Sub Menu 2</a>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link">
                <i className="nav-link-icon mdi mdi-account-outline" />
                Profile
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link" onClick={() => this.toggle(2)}>
                <i className="nav-link-icon mdi mdi-layers-outline" />
                Pages <i className="mdi mdi-chevron-right" />
              </a>
              <Collapse isOpen={this.state.activeSubMenu === 2}>
                <ul className="sidebar-nav-submenu">
                  <li className="sidebar-nav-item">
                    <a className="sidebar-nav-link">Sub Menu 1</a>
                  </li>
                  <li className="sidebar-nav-item">
                    <a className="sidebar-nav-link">Sub Menu 2</a>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link">
                <i className="nav-link-icon mdi mdi-settings-outline" />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
