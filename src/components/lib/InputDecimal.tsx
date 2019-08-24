import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

class InputDecimal extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    console.log(this.props.form.values[this.props.field.name]);
    const reg = /^\d*$/;
    const current: string = e.target.value;
    const next: string = current.concat(e.key);

    console.log(new RegExp(reg).test(current));

    if (!new RegExp(reg).test(current)) {
      // this.props.setValue(e.target.value);
      console.log('adasd');
      e.preventDefault();
      return;
    } else {
      this.props.form.setFieldValue(this.props.field.name, e.target.value);
    }
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.field.name}>{this.props.field.label}</label>
        <input
          type="text"
          name={this.props.field.name}
          id={this.props.field.id}
          value={this.props.form.values[this.props.field.name]}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputDecimal;
