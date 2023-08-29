import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeProductsModule } from './pages/home-products/home-products.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeProductsModule,
    ProductsRoutingModule,
    ComponentsModule

  ]
})
export class ProductsModule { }
