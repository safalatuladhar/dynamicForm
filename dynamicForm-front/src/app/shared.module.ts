import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToastComponent } from './components/app-toast/app-toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppToastComponent],
  imports: [CommonModule, NgbModule],
  exports: [AppToastComponent],
})
export class SharedModule {}
