import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { HomeProductsComponent } from './home-products.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeProductsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeProductsModule { }
