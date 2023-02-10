import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderHeaderComponent } from 'src/app/components/form-builder-header/form-builder-header.component';
import { FormElementSidebarComponent } from 'src/app/components/form-element-sidebar/form-element-sidebar.component';
import { FormBuilderPlaygroundComponent } from 'src/app/components/form-builder-playground/form-builder-playground.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modal/modal.component';

const routes: Routes = [{ path: '', component: FormBuilderComponent }];

@NgModule({
  declarations: [
    FormBuilderComponent,
    FormBuilderHeaderComponent,
    FormElementSidebarComponent,
    FormBuilderPlaygroundComponent,
    ModalComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class FormBuilderModule {}
