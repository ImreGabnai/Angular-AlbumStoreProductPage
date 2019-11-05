import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { ProductPageModule } from './product-page/product-page.module';
import { CommonModule } from '@angular/common';
=======
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
>>>>>>> parent of 50c1ad7... Working

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductPageModule,
=======
    ProductPageComponent
>>>>>>> parent of 50c1ad7... Working
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    CommonModule,
    ProductPageModule,
=======
    HttpModule
>>>>>>> parent of 50c1ad7... Working
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

