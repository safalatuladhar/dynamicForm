import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/interfaces/Form.interface';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { Option } from 'src/app/interfaces/Option.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

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

  redirect(): void {
    this.router.navigate(['/form-builder']);
  }

  edit() {}

  remove() {}

  download() {
    var html = `
      <html>
        <head>
          <title>My HTML File</title>
        </head>
        <body>`;
    //       <h1>Hello, HTML!</h1>
    //       <p>This is an HTML file.</p>
    //     </body>
    //   </html>

    // `;

    const data = new Blob([html], { type: 'text/html' });
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
      `
            class=" ` +
      formComponent.class +
      `
            placeholder=` +
      formComponent.placeholder +
      `
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
            id=` +
      data.id +
      `
            name=` +
      data.name +
      `
            class=` +
      data.class +
      `>
            ` +
      option +
      `           
          </select>
        </div>`;
    return html;
  }

  checkbox(data: FormElement[]) {
    var html = '';
    data.forEach((item) => {
      html += ` <value=" ` + item.name + `"> `;
    });

    return html;
  }

  checkboxField(formComponent: FormElement) {
    const html =
      `<div class="form-group">
          <input  type="checkbox"  id=` +
      formComponent.id +
      ` 
            name="` +
      formComponent.name +
      `
            class=" ` +
      formComponent.class +
      this.checkbox +
      `     />
        <label for="` +
      formComponent.id +
      `">` +
      formComponent.label +
      `</label>
        </div>`;
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
      `
            class=" ` +
      formComponent.class + `rows= ` + formComponent.value +
       `cols= ` + formComponent.value + `> ` +
        formComponent.value +`     
          /textarea>
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
}
