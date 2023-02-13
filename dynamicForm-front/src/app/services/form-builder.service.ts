import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private readonly formElementService:FormService){}
  addElement(id: string) {
    this.formElementService.getFormComponent(id)
    this.formElementService.fromElement$$.subscribe({
      next:response =>{
        this.form.formComponents = response;
        // console.log(this.form.formComponents)
        // console.log('element',this.formComponents);        
      }
    })
    this.form$$.next(this.form);
  }
  private form: Form = {
    id: null,
    name: 'New Form',
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
    console.log(this.form.formComponents)

    this.form.formComponents.push(formElement);
    this.form$$.next(this.form);
  }

  updateElementInform(formElement: FormElement, index: number) {
    this.form.formComponents[index] = formElement;
    this.form$$.next(this.form);
  }
  deleteElementFromForm(index:number){
    this.form.formComponents.splice(index,1)
  }
}
