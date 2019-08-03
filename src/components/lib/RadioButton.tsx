import React from 'react';
class RadioButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          name={this.props.field.name}
          id={this.props.field.id}
          type="radio"
          value={this.props.form.id}
          checked={this.props.form.id === this.props.form.id}
          onChange={this.props.form.handleChange}
          onBlur={this.props.form.handleBlur}
          {...this.props}
        />
        <label htmlFor={this.props.field.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default RadioButton;
