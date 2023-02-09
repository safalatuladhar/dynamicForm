import { Component } from '@angular/core';
import { FormElement } from 'src/app/interfaces/FormElement.interface';

@Component({
  selector: 'app-form-element-builder',
  templateUrl: './form-element-builder.component.html',
  styleUrls: ['./form-element-builder.component.scss'],
})
export class FormElementBuilderComponent {
  formElement: FormElement = {
    class: '',
    disabled: false,
    id: 10101,
    ids: '',
    name: '',
    options: [{ id: 999, name: '' }],
    placeholder: '',
    required: true,
    value: '',
    multiple: null,
    fileType: '',
  };

  addOptionField() {
    this.formElement.options.push({ id: 999, name: '' });
  }

  updateOptionField(event, index) {
    const value = (event.target as HTMLInputElement).value;
    this.formElement.options[index].name = value;
  }

  removeOptionField(index: number) {
    this.formElement.options.splice(index, 1);
  }
}
