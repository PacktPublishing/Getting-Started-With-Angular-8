import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from '../custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { ClientEditPageComponent } from './client-edit-page/client-edit-page.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientItemComponent } from './client-list/client-item/client-item.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';
import { ClientService } from './client.service';

const routes: Routes = [
  {
    path: 'clients/new',
    component: ClientPageComponent
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
    path: 'clients/edit/:id',
    component: ClientEditPageComponent
  }
];
@NgModule({
  declarations: [
    ClientPageComponent,
    ClientSearchPageComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ClientDetailsPageComponent,
    ClientEditPageComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CustomMaterialModule, FormsModule, RouterModule.forChild(routes)],
  providers: [ClientService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
