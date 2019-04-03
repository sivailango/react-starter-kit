import React, { Component } from 'react';

import { NavLink, Collapse } from 'reactstrap';

import sideBarRoutes from './../../routes/Sidebar.Routes';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { activeSubMenu: undefined };
  }

  toggle(e) {
    console.log(e);
    if (this.state.activeSubMenu === e) {
      this.setState(state => ({
        activeSubMenu: undefined,
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
            {sideBarRoutes.map((v, k) => {
              if (v.submenus) {
                return (
                  <li className="sidebar-nav-item" key={k}>
                    <NavLink
                      to={v.path}
                      className="sidebar-nav-link"
                      onClick={() => this.toggle(v.index)}
                    >
                      <i className="nav-link-icon mdi mdi-home-outline" />
                      {v.label}
                      <i className="mdi mdi-chevron-right" />
                    </NavLink>
                    <Collapse isOpen={this.state.activeSubMenu === v.index}>
                      <ul className="sidebar-nav-submenu">
                        {v.submenus.map((v1, k1) => {
                          return (
                            <li key={k1} className="sidebar-nav-item">
                              <NavLink
                                to={v1.path}
                                className="sidebar-nav-link"
                              >
                                {v1.label}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </Collapse>
                  </li>
                );
              } else {
                return (
                  <li className="sidebar-nav-item" key={k}>
                    <NavLink
                      to={v.path}
                      className="sidebar-nav-link"
                      onClick={() => this.toggle(v.index)}
                    >
                      <i className="nav-link-icon mdi mdi-home-outline" />
                      {v.label}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}
