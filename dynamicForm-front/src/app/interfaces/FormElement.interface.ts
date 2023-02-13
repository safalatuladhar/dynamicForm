import { FormElementType } from '../enums/FormElementType.enum';
import { Option } from './Option.interface';

export interface FormElement {
  id: number | null;
  name: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  required: boolean;
  label: string;
  ids: string;
  classs: string;
  fileType: string;
  multiple: boolean;
  options: Option[] | null;
  type: FormElementType;
}

/**
 * Common
 * ids
 * name
 * class
 * required
 * disabled
 */
