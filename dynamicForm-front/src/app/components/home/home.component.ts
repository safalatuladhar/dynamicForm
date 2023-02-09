import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/interfaces/Form';

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
    },
    {
      id: 2,
      name: 'Registration',
    },
    {
      id: 3,
      name: 'Passport',
    },
    {
      id: 4,
      name: 'FAFSA ',
    },
    {
      id: 5,
      name: 'Trainee Program',
    },
    {
      id: 6,
      name: 'Sign Up Form',
    },
  ];

  redirect(): void {
    this.router.navigate(['/form-builder']);
  }

  edit() {}

  remove() {}

  download() {}
}
