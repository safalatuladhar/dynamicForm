import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from 'src/app/interfaces/Form.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
  providers: [FormBuilderService],
})
export class FormDataComponent implements OnInit {
  form: Form;
  constructor(
    private route: ActivatedRoute,
    private readonly http: HttpClient
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
    console.log(JSON.stringify(object));
  }
}
