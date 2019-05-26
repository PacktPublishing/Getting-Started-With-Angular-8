import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SearchFormComponent } from '../search/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule, CustomMaterialModule, ReactiveFormsModule],
  exports: [SearchFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
