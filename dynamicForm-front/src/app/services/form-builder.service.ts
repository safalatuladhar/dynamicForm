import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private form: Form = {
    id: null,
    name: 'License Registration Form',
    user_id: 1,
    formComponents: [],
  };

  form$$ = new BehaviorSubject<Form>(this.form);

  setTitle(title: string) {
    if (title.trim().length === 0) {
      this.form.name = 'Untitled';
    } else {
      this.form.name = title;
    }
    this.form$$.next(this.form);
  }

  addElementToForm(formElement: FormElement) {
    console.log(formElement);

    this.form.formComponents.push(formElement);
    this.form$$.next(this.form);
  }
}
