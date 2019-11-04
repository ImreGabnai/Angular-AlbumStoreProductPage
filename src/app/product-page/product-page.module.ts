import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductPageComponent } from './product-page.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { ProductDescriptionModule } from '../product-description/product-description.module';

@NgModule({
    declarations: [ ProductPageComponent, ProductDescriptionComponent, ProductDescriptionModule ],
    bootstrap:    [ ProductPageComponent ],
    imports: [ RouterModule, CommonModule, FormsModule, ProductDescriptionComponent, ProductDescriptionModule ],
    exports: [ProductPageComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductPageModule { }
