export enum FormElementType {
  TEXTFIELD,
  TEXTAREA,
  CHECKBOX,
  FILE_UPLOAD,
  SELECT,
}

export const formElementAtrributeMap = [
  ['multiple', 'options', 'fileType'],
  ['multiple', 'options', 'fileType'],
  ['multiple', 'fileType', 'placeholder'],
  ['options', 'placeholder'],
  ['multiple', 'fileType', 'placeholder', 'value'],
];

export const formElementInfo: { class: string; title: string }[] = [
  { class: 'fa-solid fa-align-left', title: 'Text Field' },
  { class: 'far fa-caret-square-down', title: 'Textarea' },
  { class: 'fa-solid fa-square-check', title: 'Checkbox' },
  { class: 'fa-solid fa-align-justify', title: 'File Upload' },
  { class: 'fa-solid fa-file-arrow-up', title: 'Select' },
];
