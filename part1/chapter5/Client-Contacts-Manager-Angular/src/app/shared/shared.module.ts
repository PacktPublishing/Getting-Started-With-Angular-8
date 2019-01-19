import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../search/search-form/search-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchFormComponent]
})
export class SharedModule {}
