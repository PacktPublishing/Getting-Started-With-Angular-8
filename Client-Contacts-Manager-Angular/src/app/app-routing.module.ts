import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './clients/client-page/client-page.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientPageComponent
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
