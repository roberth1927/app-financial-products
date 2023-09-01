import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtomComponent } from './custom-buttom.component';



@NgModule({
  declarations: [
    CustomButtomComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomButtomComponent
  ]
})
export class CustomButtomModule { }
