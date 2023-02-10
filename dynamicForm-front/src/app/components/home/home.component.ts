import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/interfaces/Form.interface';

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
        <body>
          <h1>Hello, HTML!</h1>
          <p>This is an HTML file.</p>
        </body>
      </html>
    `;
    
    const data = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.download = 'my-file.html';
    link.href = url;
    link.click();
    }

    // fortextfield(html,formElement){
    //   html+=`<input = "`+formElement.type+`" id =`;
    // }
}