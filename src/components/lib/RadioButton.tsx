import React from 'react';
import { FieldArray } from 'formik';

import InputProps from './../../models/InputProps';
import InputOption from './../../models/InputOption';

interface State {
  position: string;
}

class RadioButton extends React.Component<InputProps, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      position: 'inline',
    };
  }

  componentDidMount() {
    this.setPosition();
  }

  setPosition() {
    if (this.props.field.position) {
      this.setState({
        position: this.props.field.position,
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="form-group">
        <label htmlFor={this.props.field.id}>{this.props.field.label}</label>
        <FieldArray
          name={this.props.field.name}
          render={arrayHelpers => (
            <div>
              {this.props.field.options!.map((o: InputOption) => (
                <div key={o.id} className={`rb ${this.state.position}`}>
                  <label>
                    <input
                      name={this.props.field.name}
                      id={o.id}
                      type="radio"
                      value={o.id}
                      checked={this.props.form.values[
                        this.props.field.name
                      ].includes(o.id)}
                      onChange={this.props.form.handleChange}
                    />
                    {o.label}
                  </label>
                </div>
              ))}
              {this.props.form.errors[this.props.field.name] &&
                this.props.form.touched[this.props.field.name] && (
                  <div>{this.props.form.errors[this.props.field.name]}</div>
                )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default RadioButton;
