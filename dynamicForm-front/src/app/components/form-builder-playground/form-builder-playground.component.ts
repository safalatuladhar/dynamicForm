import { Component } from '@angular/core';
import { FormElementType } from 'src/app/enums/FormElementType.enum';

@Component({
  selector: 'app-form-builder-playground',
  templateUrl: './form-builder-playground.component.html',
  styleUrls: ['./form-builder-playground.component.scss'],
})
export class FormBuilderPlaygroundComponent {
  formType = FormElementType.CHECKBOX;
}
