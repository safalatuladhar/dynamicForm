import { Option } from './Option.interface';

export interface FormElement {
  id: number | null;
  name: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  required: boolean;
  ids: string;
  class: string;
  options: Option[] | null;
}
