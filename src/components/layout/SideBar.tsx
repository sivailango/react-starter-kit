import React, { Component } from 'react';

import { Collapse, NavLink as BsNavLink } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import sideBarRoutes from 'routes/Sidebar.Routes';

interface Props {}

interface State {
  activeSubMenu: any;
}

export default class SideBar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { activeSubMenu: undefined };
  }

  toggle(e: number) {
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
      <nav className="sidebar">
        <div>
          <a className="logo text-center">Logo</a>
          <ul className="sidebar-nav">
            {sideBarRoutes.map((v, k) => {
              if (v.submenus) {
                return (
                  <li className="sidebar-nav-item" key={k}>
                    <BsNavLink
                      className="sidebar-nav-link"
                      onClick={() => this.toggle(v.index)}
                    >
                      <i className={`nav-link-icon mdi ${v.icon}`} />
                      {v.label}
                      {this.state.activeSubMenu === v.index ? (
                        <i className="mdi mdi-chevron-down" />
                      ) : (
                        <i className="mdi mdi-chevron-right" />
                      )}
                    </BsNavLink>
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
                      <i className={`nav-link-icon mdi ${v.icon}`} />
                      {v.label}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
