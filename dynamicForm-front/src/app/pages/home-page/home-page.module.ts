import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomeComponent, HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomePageModule {}
