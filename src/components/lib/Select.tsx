import React, { Component, Fragment } from 'react';

import Select from 'react-select';

class ReactSelect extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  handleChange = (value: any) => {
    console.log(value);
    this.props.onChange(this.props.fieldConfig.name, value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.fieldConfig.name, true);
  };

  render() {
    return (
      <div>
        <label htmlFor="color">{this.props.fieldConfig.label}</label>
        <Select
          id={this.props.fieldConfig.id}
          options={this.props.fieldConfig.options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          isMulti={true}
          value={this.props.fieldConfig.values}
          className={
            this.props.form.errors[this.props.fieldConfig.name] &&
            this.props.form.touched[this.props.fieldConfig.name]
              ? 'is-invalid'
              : ''
          }
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    );
  }
}

export default ReactSelect;
