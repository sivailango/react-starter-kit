import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">2018 - 2019</div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-md-block">
                <a href="javascript: void(0);">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
