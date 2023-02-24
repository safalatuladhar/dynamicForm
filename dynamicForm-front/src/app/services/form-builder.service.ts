import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { BehaviorSubject, catchError } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';
import { AppToastService } from './app-toast.service';
import { FormService } from './form.service';

@Injectable()
export class FormBuilderService {
  constructor(
    private readonly http: HttpClient,
    private readonly toastService: AppToastService,
    private readonly router: Router,
    private readonly formService: FormService
  ) {}

  private form: Form = {
    id: -1,
    name: '',
    userId: 1,
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

  validateForm(){
    if(this.form.formComponents.length===0){
      return false;
    }
    return true
  }

  updateElementOrder() {
    this.form.formComponents = this.form.formComponents.map((item, index) => {
      item.orders = index;
      if (item.options) {
        item.options = item.options.map((items, index) => {
          items.orders = index;
          return items;
        });
      }
      return item;
    });
    this.form$$.next(this.form);
  }

  saveFormToRemote() {

    this.updateElementOrder();

    if (this.form.id !== -1) {
      this.http
        .put(`http://localhost:8080/form/${this.form.id}`, this.form)
        .pipe(
          catchError((err) => {
            this.toastService.show('Error', 'Error updating form');
            return [];
          })
        )
        .subscribe((res) => {
          this.toastService.show('Success', 'Form updated successfully');
          this.router.navigate(['']);
        });
      return;
    }
    this.http
      .post(`http://localhost:8080/form`, this.form)
      .pipe(
        catchError((err) => {
          this.toastService.show('Error', 'Error saving form');
          return [];
        })
      )
      .subscribe((res) => {
        this.toastService.show('Success', 'Form saved successfully');
        this.formService.addForm(res);
        this.router.navigate(['']);
      });

    return;
  }
}
