import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppToastService } from 'src/app/services/app-toast.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-builder-header',
  templateUrl: './form-builder-header.component.html',
  styleUrls: ['./form-builder-header.component.scss'],
})
export class FormBuilderHeaderComponent implements OnInit, OnDestroy {
  constructor(
    private readonly formService: FormBuilderService,
    private readonly toastService: AppToastService
  ) {}

  private subscription: Subscription;
  title: string = '';

  onTitleSubmit(event: Event) {
    event.preventDefault();
  }

  ngOnInit(): void {
    this.subscription = this.formService.form$$.subscribe(
      (val) => (this.title = val.name)
    );
  }

  onTitleChange() {
    this.formService.setTitle(this.title);
  }

  cancel(): void {
    console.log('Form Cancelled');
  }

  save(): void {
    this.formService.saveFormToRemote();
    this.toastService.show('Added', 'Form saved successfully');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
