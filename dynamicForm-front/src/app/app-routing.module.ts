import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
      
  },
  {
    path: 'form-builder',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
      ),
  },
  {
    path: 'form-builder/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
      ),
  },
  {
    path: ':id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/form-data/form-data.module').then(
        (m) => m.FormDataModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/notfound-page/notfound-page.module').then(
        (m) => m.NotfoundPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
