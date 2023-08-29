import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { HomeProductsComponent } from './home-products.component';



@NgModule({
  declarations: [HomeProductsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class HomeProductsModule { }
