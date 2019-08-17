import InputOption from './InputOption';

export interface FieldConfig {
  classNames?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
  place?: number;
  placeholder?: string;
  position?: 'grid' | 'inline' | 'vertical';
  positionGrid?: number;
  onChange?: Function;
  options?: Array<InputOption>;
  title?: string;
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
  validationType?: any;
  value?: any;
}

export default FieldConfig;
