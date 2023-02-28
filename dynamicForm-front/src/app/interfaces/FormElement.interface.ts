import { FormElementType } from '../enums/FormElementType.enum';
import { AddableInputField } from './addable-input-field';
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
  orders: number;
  cols: number;
  pattern : string;
  options: Option[] | null;
  addableFields : AddableInputField[] | null;
}

/**
 * Common
 * ids
 * name
 * class
 * required
 * disabled
 */
