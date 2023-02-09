import { Injectable } from '@angular/core';
import { Form } from '../interfaces/Form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private form: Form = {
    id: null,
    name: 'License Registration',
    user_id: 1,
    formComponents: [],
  };

  constructor() {}

  getTitle(): string {
    return this.form.name;
  }

  setTitle(name: string) {
    this.form.name = name;
  }
}
