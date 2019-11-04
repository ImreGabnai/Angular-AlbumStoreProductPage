// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductPageComponent } from './product-page.component';
import { ProductDescriptionModule } from '../product-description/product-description.module';

@NgModule({
    declarations: [ ProductPageComponent, ProductDescriptionModule ],
    bootstrap:    [ ProductPageComponent ],
    imports: [ RouterModule, CommonModule, FormsModule, ProductDescriptionModule ],
    exports: [ ProductPageComponent ]
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductPageModule { }
