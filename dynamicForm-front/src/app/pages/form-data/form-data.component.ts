import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataInterface } from 'src/app/interfaces/form-data';
import { Form } from 'src/app/interfaces/Form.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { FormService } from 'src/app/services/form.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
  providers: [FormBuilderService],
})
export class FormDataComponent implements OnInit {
  form: Form;
  formDataObject:FormDataInterface = {
    jsonData: '',
    userId: 0,
    formId: 0
  }
  constructor(
    private route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly authService:AuthService,
    private readonly formService:FormService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<Form>(`http://localhost:8080/form/${id}`)
      .subscribe((form) => {
        this.form = form;
        let html = new HtmlFormBuilder(form, true).formBuilder();
        html += `<div  class="d-flex justify-content-end p-2">
        <button type="submit" (click)="getjson(this)" class="btn btn-primary">Submit</button>
      </div>`;
        document.querySelector('.submittable-form').innerHTML = html;
      });
    this.formDataObject.formId = parseInt(id)
    this.formDataObject.userId = this.authService.userId
    
  }

   getJson(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    let object = {};
    formData.forEach(function (value, key) {
      if (key.includes("[]") )
      {
        // console.log(key,value);
        if(Array.isArray(object[key])){
          object[key].push(value);
        }
        else{
          object[key] = []
          object[key].push(value);

        }
      }
      else{
        object[key] = value;
      }
      // console.log(key,value);

      
    });
    // console.log(JSON.stringify(object));
    this.formDataObject.jsonData = JSON.stringify(object);
    // console.log(this.formDataObject)
    this.formService.submitForm(this.formDataObject)
  }
}
