import { AfterViewChecked, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Form } from 'src/app/interfaces/Form.interface';
import { AppToastService } from 'src/app/services/app-toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';
import * as $ from 'jquery' 


@Component({
  selector: 'app-form-builder-header',
  templateUrl: './form-builder-header.component.html',
  styleUrls: ['./form-builder-header.component.scss'],
})
export class FormBuilderHeaderComponent
  implements OnInit, OnDestroy
{
  constructor(
    private readonly formService: FormBuilderService,
    private modalService: NgbModal,
    private readonly router: Router,
    private readonly toastService:AppToastService
  ) {}

  private subscription: Subscription;
  form: Form;
  injectableComponents: string = ``;
  // value: boolean = false;

  onTitleSubmit(event: Event) {
    event.preventDefault();
  }

  open(content) {
    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.htmlFormGenerator()

    
  }

  ngOnInit(): void {
    this.subscription = this.formService.form$$.subscribe((val) => {
      this.form = val;      
    });    
  }

  htmlFormGenerator(): void {
    if (!document.querySelector('.modal-form-preview')) {
      return;
    }
    var htmlform:HtmlFormBuilder = new HtmlFormBuilder(this.form, false);
    document.querySelector('.modal-form-preview').innerHTML = htmlform.formBuilder();
    // console.log("ngAfter");
    // var htmlform:HtmlFormBuilder = new HtmlFormBuilder(this.form, false);
          this.form.formComponents.forEach(element => {
          if(element.addableFields!==null){
            var script = htmlform.addableTextFieldAdder(element);
            $(document).ready(function(){
              // console.log(element.id);
              
              $("#add-btn"+element.id).click(function(){
                $('#add'+element.id).append(script);                
              })
              $("body").on("click", "#DeleteRow", function () {
                $(this).parents("#row").remove();
              if($('#add'+element.id).find("#row").length===0){
                $("#add-btn"+element.id).click()
              }
              })
              })
            }
          });
      
  }
  setTitleName(value: boolean){
    console.log(value);
    if(!value && this.form.id === -1 ){
      this.form.name = '';
    } 
     
  }

  onTitleChange() {
    this.formService.setTitle(this.form.name);
  }

  cancel(): void {
    this.router.navigate(['']);
  }
  touched(touched){
    // console.log(touched);
    
    if(this.form.id === -1 && !touched){
      
      // console.log("touched",this.form.id);
      this.form.name=""
    }
    
  }

  save(): void {
    if(!this.formService.validateForm()){
      this.toastService.show('Failed', 'Check if there is form components');
      return
    }
    this.formService.saveFormToRemote();
    this.router.navigate(['']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
