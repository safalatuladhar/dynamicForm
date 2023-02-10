import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormElementType } from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-builder-playground',
  templateUrl: './form-builder-playground.component.html',
  styleUrls: ['./form-builder-playground.component.scss'],
})
export class FormBuilderPlaygroundComponent implements OnInit, OnDestroy {
  constructor(private readonly formService: FormBuilderService) {}

  private subscription: Subscription;
  formComponents: FormElement[];

  ngOnInit(): void {
    this.subscription = this.formService.form$$.subscribe(
      (val) => (this.formComponents = val.formComponents)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
