import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import {
  formElementAtrributeMap,
  formElementInfo,
  FormElementType,
} from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-element-builder',
  templateUrl: './form-element-builder.component.html',
  styleUrls: ['./form-element-builder.component.scss'],
})
export class FormElementBuilderComponent implements OnInit {
  @Input() formType: FormElementType;
  @Input() modal: any;

  constructor(private readonly formService: FormBuilderService) {}

  elementChecklist = [...formElementAtrributeMap];
  elementInfoList: { class: string; title: string }[] = [...formElementInfo];

  ngOnInit(): void {
    this.formElement.type = this.formType;
  }

  formElement: FormElement = {
    class: '',
    type: -1,
    disabled: false,
    id: 10101,
    ids: '',
    name: '',
    options: [{ id: 999, name: '' }],
    placeholder: '',
    required: true,
    label: '',
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

  saveElement() {
    if (!this.validateFormElement()) {
      return;
    }
    this.formService.addElementToForm(this.formElement);
    this.modal.dismiss();
  }

  validateFormElement(): boolean {
    if (
      this.formType !== FormElementType.SELECT &&
      this.formType !== FormElementType.CHECKBOX
    ) {
      this.formElement.options = null;
    } else {
      let valid = true;
      this.formElement.options.forEach((option) => {
        valid = valid && option.name.trim().length > 0;
      });
      if (!valid) {
        alert('Invalid Option!!');
        return false;
      }
    }
    if (!this.formElement.name.trim()) {
      alert('Invalid Name!!');
      return false;
    }
    return true;
  }
}
