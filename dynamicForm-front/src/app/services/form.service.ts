import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { Form } from '../interfaces/Form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  formList$$ = new BehaviorSubject<Form[]>([]);

  public getForm(): void {
    this.http
      .get<Form[]>('http://localhost:8080/form')
      .subscribe((formList) => {
        this.formList$$.next(formList);
      });
  }
}
