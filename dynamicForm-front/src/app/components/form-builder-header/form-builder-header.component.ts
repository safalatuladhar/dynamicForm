import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Form } from 'src/app/interfaces/Form.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';

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
    private readonly router: Router
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
    document.querySelector('.modal-form-preview').innerHTML =
      new HtmlFormBuilder(this.form, false).formBuilder();
  }

  onTitleChange() {
    this.formService.setTitle(this.form.name);
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  save(): void {
    this.formService.saveFormToRemote();
    this.router.navigate(['']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
