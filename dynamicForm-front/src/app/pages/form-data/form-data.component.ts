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
  constructor(
    private route: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<Form>(`http://localhost:8080/form/${id}`)
      .subscribe((form) => {
        let html = new HtmlFormBuilder(form, true).formBuilder();
        html += `<div  class="d-flex justify-content-end p-2">
        <button type="submit" (click)="getjson(this)" class="btn btn-primary">Submit</button>
      </div>`;
        document.querySelector('.submittable-form').innerHTML = html;
      });
  }

  getjson(event: Event) {
    event.preventDefault();
    const form = document.forms.namedItem('submittable-form');
    const formData = new FormData(form);
    let object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    // const json = JSON.stringify(object);
    console.log(object);
  }
}
