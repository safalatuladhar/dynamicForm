import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  formElementAtrributeMap,
  formElementInfo,
  FormElementType,
} from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { AppToastService } from 'src/app/services/app-toast.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-element-builder',
  templateUrl: './form-element-builder.component.html',
  styleUrls: ['./form-element-builder.component.scss'],
})
export class FormElementBuilderComponent implements OnInit {
  @Input() formType: FormElementType;
  @Input() modal: any;
  @Input() formElements: FormElement;
  @Input() index: number;
  flag: boolean = false;

  constructor(
    private readonly formService: FormBuilderService,
    private readonly toastService: AppToastService
  ) {}

  elementChecklist = [...formElementAtrributeMap];
  elementInfoList: { class: string; title: string }[] = [...formElementInfo];

  ngOnInit(): void {
    if (this.formElements === null) {
      this.formElement.type = this.formType;
    } else {
      this.flag = true;
      this.formElement = this.formElements;
    }
  }

  formElement: FormElement = {
    className: '',
    type: -1,
    disabled: false,
    id: 101,
    ids: '',
    name: '',
    options: [{ id: 101, name: '', value: '' }],
    placeholder: '',
    required: true,
    label: '',
    rows: 1,
    cols: 1,
    value: '',
    orders: -1,
    multiple: null,
    fileType: '',
  };

  addOptionField() {
    this.formElement.options.push({ id: 999, name: '', value: '' });
  }

  updateOptionNameField(event, index) {
    const value = (event.target as HTMLInputElement).value;
    this.formElement.options[index].name = value;
  }

  updateOptionValueField(event, index) {
    const value = (event.target as HTMLInputElement).value;
    this.formElement.options[index].value = value;
  }

  removeOptionField(index: number) {
    this.formElement.options.splice(index, 1);
  }

  private sanitizeValues(value: string) {
    return value.replace(/\s+/g, '-').toLowerCase();
  }

  saveElement() {
    if (!this.validateFormElement()) {
      return;
    }
    this.sanitizeElementAttributes();
    if (this.index == null) {
      this.formService.addElementToForm(this.formElement);
    } else {
      this.formService.updateElementInform(this.formElement, this.index);
    }
    this.modal.dismiss();
    // this.
  }

  validateFormElement(): boolean {
    if (
      this.formType !== FormElementType.SELECT &&
      this.formType !== FormElementType.CHECKBOX &&
      this.formType !== FormElementType.RADIO
    ) {
      this.formElement.options = null;
    } else {
      let valid = true;
      this.formElement.options.forEach((option) => {
        valid = valid && option.name.trim().length > 0;
      });
      if (!valid) {
        this.toastService.show(
          'Validation Failed',
          'Invalid options!! Check and try again'
        );
        return false;
      }
    }
    if (!this.formElement.name.trim()) {
      this.toastService.show(
        'Validation Failed',
        'Invalid name!! Check and try again'
      );
      return false;
    }
    return true;
  }

  sanitizeElementAttributes() {
    this.formElement.className = this.sanitizeValues(
      this.formElement.className
    );
    this.formElement.ids = this.sanitizeValues(this.formElement.ids);
    this.formElement.name = this.sanitizeValues(this.formElement.name);
  }
}
