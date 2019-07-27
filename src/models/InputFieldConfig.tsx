import { placeholder } from '@babel/types';

export interface FieldConfig {
  name: string;
  id: string;
  value?: any;
  type:
    | 'text'
    | 'textarea'
    | 'password'
    | 'datepicer'
    | 'timepicker'
    | 'datepicker'
    | 'datetimepicker'
    | 'toggle'
    | 'select'
    | 'checkbox'
    | 'number';
  placeholder?: string;
  label?: string;
  options?: Array<{ value: any; label: string }>;
  class?: string;
}

export default FieldConfig;
