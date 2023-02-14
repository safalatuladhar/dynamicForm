import { Component } from '@angular/core';
import { AppToastService } from 'src/app/services/app-toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './app-toast.component.html',
  styleUrls: ['./app-toast.component.scss'],
})
export class AppToastComponent {
  constructor(public toastService: AppToastService) {}
}
