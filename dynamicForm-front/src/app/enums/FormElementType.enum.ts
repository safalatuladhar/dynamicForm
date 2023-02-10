export enum FormElementType {
  TEXTFIELD,
  TEXTAREA,
  CHECKBOX,
  FILE_UPLOAD,
  SELECT,
}

export const formElementMap = [
  ['multiple', 'options', 'fileType'],
  ['multiple', 'options', 'fileType'],
  ['multiple', 'fileType', 'placeholder'],
  ['options', 'placeholder'],
  ['multiple', 'fileType', 'placeholder', 'value'],
];
