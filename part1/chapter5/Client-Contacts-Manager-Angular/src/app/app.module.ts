import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientPageComponent,
    SearchFormComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    CompanyModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
