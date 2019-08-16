import React from 'react';

class Checkbox extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default Checkbox;
