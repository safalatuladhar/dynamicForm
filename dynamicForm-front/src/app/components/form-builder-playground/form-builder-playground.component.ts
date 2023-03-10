import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormElementType } from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { FormService } from 'src/app/services/form.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.formComponents,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
