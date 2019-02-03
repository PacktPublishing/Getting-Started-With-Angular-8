import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page/about-page.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, SharedModule, CustomMaterialModule]
})
export class AboutModule {}
