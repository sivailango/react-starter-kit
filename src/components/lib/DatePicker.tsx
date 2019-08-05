import * as React from 'react';
import DatePicker from 'react-datepicker';

export default class CustomDatePicker extends React.Component<any> {
  constructor(props: any) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <DatePicker
        selected={(this.props.value && new Date(this.props.value)) || null}
        onChange={(v: any) => {
          this.props.onChange(this.props.name, v);
        }}
        dateFormat="dd/MM/yyyy"
        className="form-control"
      />
    );
  }
}
