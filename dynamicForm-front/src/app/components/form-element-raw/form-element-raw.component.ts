import { Component, Input } from '@angular/core';
import { formElementInfo } from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';

@Component({
  selector: 'app-form-element-raw',
  templateUrl: './form-element-raw.component.html',
  styleUrls: ['./form-element-raw.component.scss'],
})
export class FormElementRawComponent {
  @Input() formElement: FormElement;

  elementInfoList: { class: string; title: string }[] = [...formElementInfo];
}
