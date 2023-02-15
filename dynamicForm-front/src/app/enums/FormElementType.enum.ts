export enum FormElementType {
  TEXTFIELD,
  SELECT,
  CHECKBOX,
  TEXTAREA,
  FILE_UPLOAD,
  RADIO
}

export const formElementAtrributeMap = [
  ['multiple', 'options', 'fileType', 'rows-cols'], //TEXTFIELD
  ['multiple', 'fileType', 'placeholder', 'value', 'rows-cols'], //SELECT
  ['multiple', 'fileType', 'placeholder', 'rows-cols'], //CHECKBOX
  ['multiple', 'options', 'fileType'], //TEXTAREA
  ['options', 'placeholder', 'rows-cols'], //FILE_UPLOAD
  ['multiple', 'fileType', 'placeholder', 'rows-cols'], //RADIO
];

export const formElementInfo: { class: string; title: string }[] = [
  { class: 'fa-solid fa-align-left', title: 'Text Field' },
  { class: 'far fa-caret-square-down', title: 'Select' },
  { class: 'fa-solid fa-square-check', title: 'Checkbox' },
  { class: 'fa-solid fa-align-justify', title: 'Textarea' },
  { class: 'fa-solid fa-file-arrow-up', title: 'File Upload' },
  { class: 'fa-solid fa-circle-dot', title: 'Radio' },
];
