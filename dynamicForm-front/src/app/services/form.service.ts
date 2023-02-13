import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, first } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  form$$ = new BehaviorSubject<Form[]>([]);
  fromElement$$ = new BehaviorSubject<FormElement[]>([]);

  public getForm():void {
    this.http.get<Form[]>('http://localhost:8080/form').pipe(first()).subscribe(form => this.form$$.next(form));
  }

  public getFormComponent(id:string):void{
    this.http.get<FormElement[]>('http://localhost:8080/formComponent/'+id).pipe(first()).subscribe(formElement => this.fromElement$$.next(formElement));
  }

  constructor(private http:HttpClient) { }
}
