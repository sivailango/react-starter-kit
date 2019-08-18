import React, { Component } from 'react';

import { NavLink, Popover } from 'reactstrap';

import sideBarRoutes from './../../routes/Sidebar.Routes';

interface Props {}

interface State {
  activeSubMenu: any;
}

export default class SideBarXs extends React.Component<Props, State> {
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
      <nav className="sidebar-sm">
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
                      id={`sidebar-${v.index}`}
                      onClick={() => this.toggle(v.index)}
                    >
                      <i className={`mdi ${v.icon}`} />
                    </NavLink>
                    <Popover
                      placement="right-start"
                      hideArrow={true}
                      isOpen={this.state.activeSubMenu === v.index}
                      target={`sidebar-${v.index}`}
                      trigger="hover"
                    >
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
                    </Popover>
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
                      <i className={`mdi ${v.icon}`} />
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
