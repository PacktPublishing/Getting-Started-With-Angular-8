import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from '../custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyDetailsPageComponent } from './company-details-page/company-details-page.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CompanySearchPageComponent } from './company-search-page/company-search-page.component';
import { CompanyService } from './company.service';

const routes: Routes = [
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
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CustomMaterialModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    CompanyDetailsPageComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanySearchPageComponent,
    CompanyDetailComponent,
    CompanyPageComponent
  ],
  providers: [CompanyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanyModule {}
