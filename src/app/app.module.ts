import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductPageModule } from './product-page/product-page.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ProductPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

