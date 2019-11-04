// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductDescriptionComponent } from './product-description.component';

@NgModule({
    declarations: [ ProductDescriptionComponent ],
    bootstrap:    [ ProductDescriptionComponent ],
    imports: [ RouterModule, CommonModule, FormsModule ],
    exports: [ ProductDescriptionComponent],
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductDescriptionModule { }
