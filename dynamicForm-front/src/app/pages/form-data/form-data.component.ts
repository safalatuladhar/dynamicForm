import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataInterface } from 'src/app/interfaces/FormData.interface';
import { Form } from 'src/app/interfaces/Form.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { FormService } from 'src/app/services/form.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery' 


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
  providers: [FormBuilderService],
})
export class FormDataComponent implements OnInit {
  form: Form;
  formDataObject: FormDataInterface = {
    jsonData: '',
    userId: 0,
    formId: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly formService: FormService,
    private readonly titleService: Title,
    private readonly router: Router
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
        if (form) {
          this.titleService.setTitle(form.name);
        }
        var htmlform:HtmlFormBuilder = new HtmlFormBuilder(this.form, false);

       console.log("Hi");
          this.form.formComponents.forEach(element => {
          if(element.addableFields!==null){
            var script = htmlform.addableTextFieldAdder(element);
            $(document).ready(function(){
              console.log(element.id);
              
              $("#add-btn"+element.id).click(function(){
                $('#add'+element.id).append(script);
                // console.log("Hi");
                // alert("Hi")
                
              })
              })
              $(document).ready(function(){
                $("body").on("click", "#DeleteRow", function () {
                  $(this).parents("#row").remove();
              })
              })
            }
          });
      });
    this.formDataObject.formId = parseInt(id);
  }

  routeBack() {
    this.router.navigate(['']);
  }

  getJson(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // console.log(form);
    
    const formData = new FormData(form);
    let object = {};
    console.log(formData);
    
    let formDatas: FormData = new FormData();
    formData.forEach(function (value, key) {
      // console.log(key,value);
      
      if (key.includes('[]')) {
        if (Array.isArray(object[key])) {
          object[key].push(value);
        } else {
          object[key] = [];
          object[key].push(value);
        }
      } else {
        if(typeof(value)==='object'){
          if(key in object){
            if (Array.isArray(object[key])){
              object[key].push = value.name
            }
            else{
              let temp = object[key]
              object[key] = []
              object[key].push(temp)
              object[key].push(value.name)
            }
          }
          else{
            object[key] = value.name

          }
          formDatas.append('file',value)
        }
        else{
          object[key] = value;
        }
      }
    });
    // console.log(this.form);
    console.log(object);
    
    let keystoremove=[]
    
    this.form.formComponents.forEach(element => {
      let objects=[];
      if(element.addableFields){
          let i =0;
          let continueloop = true;
          do{
          let obj={};
          element.addableFields.forEach(addableField => {
            obj[addableField.name+"[]"] = object[addableField.name+"[]"][i];
            if(!keystoremove.includes(addableField.name+"[]")){
              keystoremove.push(addableField.name+"[]")
            }
            if(i+1===object[addableField.name+"[]"].length){
              continueloop = false
            }
          });
          objects.push(obj);
          i++;
        }while(continueloop);

      }
      console.log(objects)
      object[element.name]=objects
    });
    console.log(keystoremove);

    keystoremove.forEach(element => {
      delete object[element]
    });
    
    console.log(object);
    
    
    this.formDataObject.jsonData = JSON.stringify(object)
    this.formDataObject.userId = this.authService.userId;
    const formBlob = new Blob([JSON.stringify(this.formDataObject)],{type: "application/json"})
    formDatas.append('formDataDTO',formBlob)
    this.formService.submitForm(formDatas);
  }
}
