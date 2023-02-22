import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './form-data.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{ path: '', component: FormDataComponent }];
@NgModule({
  declarations: [FormDataComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormDataModule { }
