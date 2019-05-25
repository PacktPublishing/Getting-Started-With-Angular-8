import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './about/about-page/about-page.component';
import { ClientEditPageComponent } from './clients/client-edit-page/client-edit-page.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { ClientSearchPageComponent } from './clients/client-search-page/client-search-page.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { CompanyDetailsPageComponent } from './company/company-details-page/company-details-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientDetailsPageComponent } from './clients/client-details-page/client-details-page.component';
import { CompanySearchPageComponent } from './company/company-search-page/company-search-page.component';
import { CompanyPageComponent } from './company/company-page/company-page.component';

const routes: Routes = [
  {
    path: 'clients/new',
    component: ClientPageComponent
  },
  {
    path: 'clients/edit/:id',
    component: ClientEditPageComponent
  },

  {
    path: 'clients/search',
    component: ClientSearchPageComponent
  },
  {
    path: 'clients/details/:id',
    component: ClientDetailsPageComponent
  },
  {
    path: 'company/new',
    component: CompanyPageComponent
  },
  {
    path: 'company/search',
    component: CompanySearchPageComponent
  },
  {
    path: 'company/details/:id',
    component: CompanyDetailsPageComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
