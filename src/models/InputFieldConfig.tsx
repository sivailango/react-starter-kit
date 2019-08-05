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
    | 'number'
    | 'checkbox_group'
    | 'radio'
    | 'react_select';
  placeholder?: string;
  label?: string;
  options?: Array<{ id?: any; value: any; label: string }>;
  class?: string;
  validation?: {};
}

export default FieldConfig;
