import InputOption from './InputOption';

export interface FieldConfig {
  arrayFields?: {
    headers: Array<{
      label: string;
      grid: number;
      key: string;
      required?: boolean;
    }>;
    fields: Array<FieldConfig>;
  };
  classNames?: string;
  disabled?: boolean;
  id?: string;
  isArrayField?: boolean;
  arrayIndex?: number;
  arrayFieldName?: string;
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
    | 'decimal'
    | 'array_fields';
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
