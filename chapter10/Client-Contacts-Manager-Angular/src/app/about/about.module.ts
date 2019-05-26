import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AboutPageComponent } from './about-page/about-page.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, SharedModule, CustomMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule {}
