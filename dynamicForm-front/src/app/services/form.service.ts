import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, first, of } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { AppToastService } from './app-toast.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(
    private http: HttpClient,
    private toastService: AppToastService
  ) {}

  formList: Form[] = [];
  formList$$ = new BehaviorSubject<Form[]>(this.formList);

  public getForm(): void {
    this.http
      .get<Form[]>('http://localhost:8080/form')
      .subscribe((formList) => {
        this.formList = [...formList];
        this.formList$$.next(formList);
      });
  }

  public deleteForm(id: number): void {
    this.http
      .delete<Form[]>(`http://localhost:8080/form/${id}`)
      .pipe(
        catchError(
          catchError((err) => {
            this.toastService.show('Error', 'Form deletion failed');
            return of([err]);
          })
        )
      )
      .subscribe(() => {
        this.formList = this.formList.filter((form) => form.id !== id);
        this.formList$$.next(this.formList);
        this.toastService.show('Removed', 'Form deleted successfully.');
      });
  }
}
