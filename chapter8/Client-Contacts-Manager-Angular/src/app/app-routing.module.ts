import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'clients/new',
    loadChildren: './clients/client.module#ClientModule'
  },
  {
    path: 'clients/edit/:id',
    loadChildren: './clients/client.module#ClientModule'
  },

  {
    path: 'clients/search',
    loadChildren: './clients/client.module#ClientModule'
  },
  {
    path: 'clients/details/:id',
    loadChildren: './clients/client.module#ClientModule'
  },
  {
    path: 'company/new',
    loadChildren: './company/company.module#CompanyModule'
  },
  {
    path: 'company/search',
    loadChildren: './company/company.module#CompanyModule'
  },
  {
    path: 'company/details/:id',
    loadChildren: './company/company.module#CompanyModule'
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: '/clients/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClientModule, CompanyModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
