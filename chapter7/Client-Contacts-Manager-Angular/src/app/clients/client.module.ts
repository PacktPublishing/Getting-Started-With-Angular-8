import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';
import { ClientService } from './client.service';
import { ClientItemComponent } from './client-list/client-item/client-item.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { ClientEditPageComponent } from './client-edit-page/client-edit-page.component';

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
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CustomMaterialModule, FormsModule],
  providers: [ClientService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
