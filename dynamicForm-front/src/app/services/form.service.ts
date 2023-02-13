import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, first } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private form: Form = {
    id: null,
    name: 'New Form',
    user_id: 1,
    formComponents: [],
  };
  form$$ = new BehaviorSubject<Form[]>([]);
  fromElement$$ = new BehaviorSubject<FormElement[]>([]);
  oneForm$$ = new BehaviorSubject<Form>(this.form);

  public getForm():void {
    this.http.get<Form[]>('http://localhost:8080/form').pipe(first()).subscribe(form => this.form$$.next(form));
  }
  public getOneForm(id:string):void {
    this.http.get<Form>('http://localhost:8080/form/'+id).pipe(first()).subscribe(forms => this.oneForm$$.next(forms));
  }

  public getFormComponent(id:string):void{
    this.http.get<FormElement[]>('http://localhost:8080/formComponent/'+id).pipe(first()).subscribe(formElement => this.fromElement$$.next(formElement));
  }

  constructor(private http:HttpClient) { }
}
