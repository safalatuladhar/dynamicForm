import { Option } from './Option.interface';
import { FormElementType } from '../enums/FormElementType.enum';
export interface FormElement {
  id: number | null;
  type: FormElementType;
  name: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  required: boolean;
  label: string;
  ids: string;
  class: string;
  fileType: string;
  multiple: boolean;
  rows: number;
  cols: number;
  options: Option[] | null;
}

/**
 * Common
 * ids
 * name
 * class
 * required
 * disabled
 */
