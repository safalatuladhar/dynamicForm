import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Form } from 'src/app/interfaces/Form.interface';
import { FormService } from 'src/app/services/form.service';
import { HtmlFormBuilder } from 'src/app/utils/html-form-builder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly formService: FormService,
    private readonly http: HttpClient
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
  }

  download(id: number) {
    this.http
      .get<Form>(`http://localhost:8080/form/${id}`)
      .subscribe((form) => {
        new HtmlFormBuilder(form,false).download();
      });
  }
  formData(id:number){
    this.router.navigate([`/${id}`]);
  }
}
