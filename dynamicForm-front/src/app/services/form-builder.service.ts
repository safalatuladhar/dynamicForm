import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private readonly http: HttpClient) {}

  private form: Form = {
    id: 101,
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

  saveFormToRemote() {
    this.http
      .post('http://localhost:8080/form', this.form)
      .pipe(
        catchError((err) => {
          console.log('Error saving form');
          return err;
        })
      )
      .subscribe((res) => {
        console.log('Form saved to remote');
      });
  }
}
