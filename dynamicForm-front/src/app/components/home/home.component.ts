import { Component } from '@angular/core';
import { Form } from 'src/app/interfaces/Form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  details: Form[] = [
    {
      id: 1,
      name: 'License'
    },
    {
      id: 2,
      name: 'Registration'
    },
    {
      id: 3,
      name: 'Passport'
    },
    {
      id: 4,
      name: 'FAFSA '
    },
    {
      id: 5,
      name: 'Trainee Program'
    },
    {
      id: 6,
      name: 'Sign Up Form'
    },
  ];

  edit() {}

  remove() {}

  download() {}
}
