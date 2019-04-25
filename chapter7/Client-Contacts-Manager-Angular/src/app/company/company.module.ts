import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsPageComponent } from './company-details-page/company-details-page.component';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyListItemComponent } from './company-list/company-list-item/company-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CompanyService } from './company.service';
import { CompanySearchPageComponent } from './company-search-page/company-search-page.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CustomMaterialModule, FormsModule],
  declarations: [
    CompanyDetailsPageComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanyListItemComponent,
    CompanySearchPageComponent,
    CompanyDetailComponent
  ],
  providers: [CompanyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanyModule {}
