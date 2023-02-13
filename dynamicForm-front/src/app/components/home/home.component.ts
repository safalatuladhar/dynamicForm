import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ngOnInit(): void {
    this.getForm();
  }
  getForm(): void {
    this.formService.getForm();
    this.formService.form$$.subscribe({
      next: (response) => {
        this.details = response;
      },
    });
  }

  details: Form[] = [
    {
      id: 1,
      name: 'License',
      user_id: 1,
      formComponents: null,
    },
    {
      id: 2,
      name: 'Registration',
      user_id: 1,
      formComponents: null,
    },
    {
      id: 3,
      name: 'Passport',
      user_id: 1,
      formComponents: null,
    },
    {
      id: 4,
      name: 'FAFSA ',
      user_id: 1,
      formComponents: null,
    },
    {
      id: 5,
      name: 'Trainee Program',
      user_id: 1,
      formComponents: null,
    },
    {
      id: 6,
      name: 'Sign Up Form',
      user_id: 1,
      formComponents: null,
    },
  ];

  formComponent: FormElement[] = [
    {
      id: 952,
      name: 'Lname1',
      value: '1',
      disabled: false,
      placeholder: 'Insert LName',
      required: false,
      ids: 'f2',
      class: 'form-control',
      label: null,
      fileType: null,
      multiple: null,
      type: FormElementType.TEXTAREA,
      rows: 1,
      cols: 1,
      options: [
        { id: 803, name: 'India', value: null },
        { id: 802, name: 'Nepal', value: null },
      ],
    },

    {
      id: 952,
      name: 'Lname1',
      value: '1',
      disabled: false,
      placeholder: 'Insert LName',
      required: false,
      ids: 'f2',
      class: 'form-control',
      label: null,
      fileType: null,
      multiple: null,
      rows: 1,
      cols: 1,
      type: FormElementType.FILE_UPLOAD,
      options: [
        { id: 803, name: 'India', value: null },
        { id: 802, name: 'Nepal', value: null },
      ],
    },

    {
      id: 952,
      name: 'Lname1',
      value: '1',
      disabled: false,
      placeholder: 'Insert LName',
      required: false,
      ids: 'f2',
      class: 'form-control',
      label: 'enter name:',
      fileType: null,
      multiple: null,
      rows: 1,
      cols: 1,
      type: FormElementType.TEXTFIELD,
      options: [
        { id: 803, name: 'India', value: null },
        { id: 802, name: 'Nepal', value: null },
      ],
    },
  ];

  redirect(): void {
    this.router.navigate(['/form-builder']);
  }

  edit(id) {
    this.router.navigate(['/form-builder', id]);
  }

  remove() {}

  download() {
    var html = this.formBuilder(this.formComponent);
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
      html +
      `  
      </form>

      </body>
      </html>
    `;
    console.log(html);

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
      formComponent.class +
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
      data.class +
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
        formComponent.class +
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
      formComponent.class +
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
