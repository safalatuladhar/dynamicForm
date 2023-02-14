import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormElementType } from 'src/app/enums/FormElementType.enum';
import { Form } from 'src/app/interfaces/Form.interface';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { Option } from 'src/app/interfaces/Option.interface';
import { AppToastService } from 'src/app/services/app-toast.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly formService: FormService,
    private readonly toastService: AppToastService
  ) {}

  formList: Form[] = [];

  subscription: Subscription;

  ngOnInit(): void {
    this.formService.getForm();
    this.subscription = this.formService.formList$$.subscribe((list) => {
      this.formList = list;
    });
  }

  redirect(): void {
    this.router.navigate(['form-builder']);
  }

  remove(id: number) {
    this.formService.deleteForm(id);
    this.toastService.show('Removed', 'Form removed successfully.');
  }

  download() {}
}
