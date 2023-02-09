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

  download() {}
}
