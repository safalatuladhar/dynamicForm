import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormElementType } from 'src/app/enums/FormElementType.enum';
import { Form } from 'src/app/interfaces/Form.interface';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { Option } from 'src/app/interfaces/Option.interface';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly formService: FormService
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

  edit(id) {
    this.router.navigate(['form-builder', id]);
  }

  remove() {}

  download() {
    // var html = this.formBuilder(this.formComponent);
    var htmlFormat =
      `
      <html>
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <title> abc </title>
      </head>
      <body>
      <form method="post" enctype="multipart/form-data">
      ` +
      'html' +
      `
      </form>

      </body>
      </html>
    `;

    const data = new Blob([htmlFormat], { type: 'text/html' });
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.download = 'my-file.html';
    link.href = url;
    link.click();
  }

  textField(formComponent: FormElement) {
    const html =
      `<div class="form-group">
          <label for="` +
      formComponent.id +
      `">` +
      formComponent.label +
      `</label>
          <input
            type="text" 
            id=` +
      formComponent.id +
      ` 
            name="` +
      formComponent.name +
      `"
            class=" ` +
      formComponent.className +
      `"
            placeholder="` +
      formComponent.placeholder +
      `"
          />
        </div>`;
    return html;
  }

  option(data: Option[]) {
    var html = '';
    data.forEach((item) => {
      html +=
        ` <option value=" ` + item.name + `"> ` + item.name + `</option> `;
    });

    return html;
  }

  selectField(data: FormElement) {
    const option = this.option(data.options);
    const html =
      `<div class="form-group">
          <label for="` +
      data.id +
      `">` +
      data.label +
      `</label>
          
          <select
            id="` +
      data.id +
      `"
            name="` +
      data.name +
      `"
            class="` +
      data.className +
      `">
            ` +
      option +
      `           
          </select>
        </div>`;
    return html;
  }

  checkboxField(formComponent: FormElement) {
    var html = '';

    formComponent.options.forEach((item) => {
      html +=
        `<div class="form-group">
          <input  type="checkbox"  id=` +
        formComponent.id +
        ` 
            name="` +
        formComponent.name +
        `
            class=" ` +
        formComponent.className +
        ` value=" ` +
        item.name +
        `>

        <label for="` +
        formComponent.id +
        `">` +
        item.name +
        `</label>
        </div>`;
    });
    return html;
  }

  textareaField(formComponent: FormElement) {
    const html =
      `<div class="form-group">
          <label for="` +
      formComponent.id +
      `">` +
      formComponent.label +
      `</label>
          <textarea
            id=` +
      formComponent.id +
      ` 
            name="` +
      formComponent.name +
      `"
            class=" ` +
      formComponent.className +
      `" rows = ` +
      `5` +
      `" cols= ` +
      `5` +
      `">      
          </textarea>
        </div>`;
    return html;
  }

  fileuploadField(formComponent: FormElement) {
    const html =
      `<div class="form-group">
          <input  type="file"  id=` +
      formComponent.id +
      ` 
            name="` +
      formComponent.name +
      `>
       <input  type="submit">
        </div>`;
    return html;
  }

  formBuilder(formComponent: FormElement[]) {
    var html = '';
    formComponent.forEach((item) => {
      console.log(item.type === 0);

      if (item.type === 0) {
        html += this.textField(item);
      } else if (item.type === 2) {
        html += this.checkboxField(item);
      } else if (item.type === 4) {
        html += this.selectField(item);
      } else if (item.type === 1) {
        html += this.textareaField(item);
      } else if (item.type === 3) {
        html += this.fileuploadField(item);
      }
    });
    return html;
  }
}
