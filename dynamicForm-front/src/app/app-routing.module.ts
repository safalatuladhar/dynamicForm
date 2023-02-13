import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'form-builder',
    loadChildren: () =>
      import('./pages/form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
      ),
  },
  {
    path: 'form-builder/:id',
    loadChildren: () =>
      import('./pages/form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
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
