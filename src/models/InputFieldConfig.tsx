export interface FieldConfig {
  disabled?: boolean;
  name: string;
  id: string;
  value?: any;
  type:
    | 'text'
    | 'email'
    | 'textarea'
    | 'password'
    | 'datepicer'
    | 'timepicker'
    | 'datepicker'
    | 'datetimepicker'
    | 'toggle'
    | 'select'
    | 'checkbox'
    | 'number'
    | 'checkbox_group'
    | 'radio'
    | 'react_select'
    | 'decimal';
  placeholder?: string;
  validationType?: any;
  label?: string;
  place?: number;
  options?: Array<{ id?: any; value: any; label: string }>;
  classNames?: string;
  onChange?: Function;
  validations?: Array<{
    type:
      | 'required'
      | 'string'
      | 'min'
      | 'max'
      | 'email'
      | 'url'
      | 'matches'
      | 'number';
    params: Array<any>;
  }>;
  validation?: {
    required?: {
      message?: string;
    };
    min?: {
      message?: string;
      v: number;
    };
    max?: {
      message?: string;
      v: number;
    };
    pattern?: RegExp;
  };
}

export default FieldConfig;
