import { FormElementType } from '../enums/FormElementType.enum';
import { Option } from './Option.interface';
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
  className: string;
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
