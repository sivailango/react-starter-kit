import { placeholder } from '@babel/types';
import { boolean } from 'yup';

export interface FieldConfig {
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
  label?: string;
  place?: number;
  options?: Array<{ id?: any; value: any; label: string }>;
  class?: string;
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
