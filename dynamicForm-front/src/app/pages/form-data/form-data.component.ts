import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Form } from 'src/app/interfaces/Form.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
  providers:[FormBuilderService]
})
export class FormDataComponent implements OnInit,AfterViewInit {
  formData:Form
  // myForm: FormGroup
  @ViewChildren('formDatas') formDatas: ElementRef;
  // getjson:string
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formService: FormBuilderService,
    private readonly http: HttpClient,
  ) {}
  ngAfterViewInit(): void {
    // this.formDatas.nativeElement.children.forEach((child: Element) => {
    //   console.log(child.textContent);
    // });
    console.log(this.formDatas.nativeElement);
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<Form>(`http://localhost:8080/form/${id}`)
      .subscribe((form) => {
        this.formData = form;
        
        let html = new HtmlFormBuilder(this.formData,true).formBuilder()
        html+=`<div  class="d-flex justify-content-end p-2">
        <button type="submit" (click)="getjson(this)" class="btn btn-primary">Submit</button>
      </div>`
        document.querySelector('.modal-form-preview').innerHTML = html
        // if(html){
          // console.log(this.formDatas);
          

          // const childElements = this.formDatas.nativeElement.children;
          
          // Array.from(childElements).forEach((element: Element) => {
          //   // do something with each child element
          //   console.log(element)
          // });
        // }
        
      });      
    }
    // ngAfterViewInit(){
      
    // }


    getjson(jsondata:HTMLFormElement){
      console.log(jsondata)
      console.log(jsondata.getElementsByClassName("form-control "))
      // jsondata.

      // jsondata.id
      // jsondata.forEach(element => {
      //   console.log(element)
        
      // });



      // console.log(this.formDatas.nativeElement.children)
      // console.log(this.formDatas)
      // console.log(document.getElementById("302"))      
      // console.log(jsondata.attributes.getNamedItem("2nd-field"));
      // console.log(jsondata);      
    }

}
