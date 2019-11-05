import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ProductPageModule } from './product-page/product-page.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent
    // ProductPageModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule,
    // ProductPageComponent
    // ProductPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
/*   exports: [
    AppComponent,
    ProductPageComponent
  ] */
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }


