import React from 'react';

import Select from 'react-select';
// import classNames from 'classnames';

import InputHint from './forms/InputHint';

// import InputProps from 'models/InputProps';

import RequiredField from './forms/RequiredField';

interface State {
  isRequired?: boolean;
}

class ReactSelect extends React.PureComponent<any, State> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    this.checkRequired();
  }

  handleChange = (value: any) => {
    this.props.onChange(this.props.field.name, value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.field.name, true);
  };

  checkRequired() {
    if (this.props.field.validations) {
      const o = this.props.field.validations.filter(
        (v: any) => v.type === 'required'
      );

      if (o) {
        this.setState({
          isRequired: true,
        });
      }
    }
  }

  render() {
    const customStyles = {
      option: (provided: any) => ({
        ...provided,
        height: '31px',
        padding: '6px',
      }),
      container: (provided: any) => ({
        ...provided,
        minHeight: '1px',
        textAlign: 'left',
      }),
      control: (provided: any) => ({
        ...provided,
        border: '1px solid #ced4da',
        borderRadius: '0',
        minHeight: '1px',
        height: '31px',
        boxShadow: 'none',
      }),
      input: (provided: any) => ({
        ...provided,
        minHeight: '1px',
      }),
      dropdownIndicator: (provided: any) => ({
        ...provided,
        minHeight: '1px',
        paddingTop: '0',
        paddingBottom: '0',
        color: '#757575',
      }),
      indicatorsContainer: (provided: any) => ({
        ...provided,
        height: '29px',
      }),
      clearIndicator: (provided: any) => ({
        ...provided,
        minHeight: '1px',
      }),
      valueContainer: (provided: any) => ({
        ...provided,
        minHeight: '1px',
        height: '31px',
        paddingTop: '0',
        paddingBottom: '0',
      }),
      singleValue: (provided: any) => ({
        ...provided,
        minHeight: '1px',
        paddingBottom: '2px',
      }),
      menu: (provided: any) => ({
        ...provided,
        margin: 0,
      }),
      menuList: (provided: any) => ({
        ...provided,
        padding: 0,
      }),
    };

    return (
      <div className={this.props.classes}>
        <label htmlFor={this.props.field.id} className={this.props.lClass}>
          {this.props.field.label} {this.state.isRequired && <RequiredField />}
        </label>
        <div className={this.props.dClass}>
          <Select
            className={
              this.props.form.errors[this.props.field.name] &&
              this.props.form.touched[this.props.field.name]
                ? 'is-invalid'
                : ''
            }
            styles={customStyles}
            id={this.props.field.id}
            options={this.props.field.options}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            isMulti={this.props.multi}
            placeholder=""
            value={this.props.field.values}
            components={{
              IndicatorSeparator: () => null,
            }}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
            })}
          />
          {this.props.form.errors[this.props.field.name] &&
            this.props.form.touched[this.props.field.name] && (
              <InputHint
                message={this.props.form.errors[this.props.field.name]}
              />
            )}
        </div>
      </div>
    );
  }
}

export default ReactSelect;
