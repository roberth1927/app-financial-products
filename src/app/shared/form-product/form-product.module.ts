import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './form-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtomModule } from '../layout/custom-buttom/custom-buttom.module';



@NgModule({
  declarations: [
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomButtomModule
  ],
  exports: [
    FormProductComponent
  ]
})
export class FormProductModule { }
