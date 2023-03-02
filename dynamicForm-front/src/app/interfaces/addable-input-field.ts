import { FormElementType } from "../enums/FormElementType.enum";

export interface AddableInputField {
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
  multiple: boolean;
  orders: number;
  pattern : string;
}

