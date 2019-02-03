import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../search/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
  declarations: [SearchFormComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule, CustomMaterialModule],
  exports: [SearchFormComponent]
})
export class SharedModule {}
