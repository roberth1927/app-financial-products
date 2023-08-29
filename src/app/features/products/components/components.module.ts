import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ListProductsComponent } from './list-products/list-products.component';



@NgModule({
  declarations: [
    HeaderCardComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderCardComponent,
    ListProductsComponent
  ]

})
export class ComponentsModule { }
