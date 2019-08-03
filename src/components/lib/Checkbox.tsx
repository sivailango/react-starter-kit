import React from 'react';
/*
interface Props {
  children: any;
  field: any;
  id: any;
  name: string;
  onChange: any;
  value: any;
  label: any;
  form: any;
}
*/

class Checkbox extends React.Component<any, any> {
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
          type="checkbox"
          value={this.props.form.id}
          checked={this.props.form.value}
          onChange={this.props.form.handleChange}
          onBlur={this.props.form.handleBlur}
        />
        <label htmlFor={this.props.field.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
