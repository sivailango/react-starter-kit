import React from 'react';

import classNames from 'classnames';

import InputProps from 'models/InputProps';

class Checkbox extends React.PureComponent<InputProps, any> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes}>
        <label className={this.props.lClass}></label>
        <div className={this.props.dClass}>
          <input
            name={this.props.field.name}
            id={this.props.field.id}
            type="checkbox"
            value={this.props.form.id}
            checked={this.props.form.value}
            onChange={this.props.form.handleChange}
            onBlur={this.props.form.handleBlur}
          />
          <label htmlFor={this.props.field.id}>{this.props.field.label}</label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
