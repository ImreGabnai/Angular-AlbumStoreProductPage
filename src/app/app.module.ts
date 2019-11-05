import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { ProductPageModule } from './product-page/product-page.module';
import { CommonModule } from '@angular/common';
=======
=======
>>>>>>> parent of 50c1ad7... Working
=======
>>>>>>> parent of 50c1ad7... Working
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 50c1ad7... Working
=======
>>>>>>> parent of 50c1ad7... Working
=======
>>>>>>> parent of 50c1ad7... Working

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ProductPageModule,
=======
    ProductPageComponent
>>>>>>> parent of 50c1ad7... Working
=======
    ProductPageComponent
>>>>>>> parent of 50c1ad7... Working
=======
    ProductPageComponent
>>>>>>> parent of 50c1ad7... Working
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    CommonModule,
    ProductPageModule,
=======
    HttpModule
>>>>>>> parent of 50c1ad7... Working
=======
    HttpModule
>>>>>>> parent of 50c1ad7... Working
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

