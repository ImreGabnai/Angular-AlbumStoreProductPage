import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

import { ProductPageModule } from './product-page/product-page.module';
import { ProductDescriptionModule } from './product-description/product-description.module';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductPageModule,
    ProductDescriptionModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ProductPageModule,
    ProductDescriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ProductPageComponent,
    ProductDescriptionComponent,
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

