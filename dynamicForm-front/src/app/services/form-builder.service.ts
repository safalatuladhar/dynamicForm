import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private readonly http: HttpClient) {}

  addElement(id: string) {
    // this.formElementService.getFormComponent(id);
    // this.formElementService.fromElement$$.subscribe({
    //   next: (response) => {
    //     this.form.formComponents = response;
    //     console.log('response', response);
    //     // response.form.name
    //     // console.log(this.form.formComponents)
    //     // console.log('element',this.formComponents);
    //     this.form$$.next(this.form);
    //   },
    // });
    // this.formElementService.getOneForm(id);
    // this.formElementService.oneForm$$.subscribe({
    //   next: (response) => {
    //     this.form.name = response.name;
    //     this.form$$.next(this.form);
    //     console.log('resposnsename', response.name);
    //     console.log(this.form.name);
    //   },
    // });
    // this.formElementService.
  }

  private form: Form = {
    id: null,
    name: 'New Form',
    user_id: 1,
    formComponents: [],
  };

  form$$ = new BehaviorSubject<Form>(this.form);

  getFormById(id: string): void {
    this.http
      .get<Form>(`http://localhost:8080/form/${id}`)
      .subscribe((form) => {
        this.form = form;
        this.form$$.next(this.form);
      });
  }

  setTitle(title: string) {
    if (title.trim().length === 0) {
      this.form.name = 'Untitled';
    } else {
      this.form.name = title;
    }
    this.form$$.next(this.form);
  }

  addElementToForm(formElement: FormElement) {
    this.form.formComponents.push(formElement);
    this.form$$.next(this.form);
  }

  updateElementInform(formElement: FormElement, index: number) {
    this.form.formComponents[index] = formElement;
    this.form$$.next(this.form);
  }

  deleteElementFromForm(index: number) {
    this.form.formComponents.splice(index, 1);
  }
}
