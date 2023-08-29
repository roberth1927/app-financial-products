import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ProductsModule
  ]
})
export class FeaturesModule { }
