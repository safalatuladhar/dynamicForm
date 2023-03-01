import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
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
  implements OnInit, OnDestroy, AfterViewChecked
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

  onTitleSubmit(event: Event) {
    event.preventDefault();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    
  }

  ngOnInit(): void {
    this.subscription = this.formService.form$$.subscribe((val) => {
      this.form = val;
    });
    
    
  }

  ngAfterViewChecked(): void {
    if (!document.querySelector('.modal-form-preview')) {
      return;
    }
    var htmlform:HtmlFormBuilder = new HtmlFormBuilder(this.form, false);
    document.querySelector('.modal-form-preview').innerHTML = htmlform.formBuilder();
    //   console.log("Hi");
    // this.form.formComponents.forEach(element => {
    //   if(element.addableFields!==null){
    //     var script = htmlform.addableTextFieldAdder(element);
    //     $(document).ready(function(){
    //       console.log(element.id);
          
    //       $("#add-btn"+element.id).click(function(){
    //         // $('#add`+formComponent.id+`').append(`+ s +`);
    //         // console.log("Hi");
    //         alert("Hi")
            
    //       })
    //     })
    //   }
    // });
      
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
