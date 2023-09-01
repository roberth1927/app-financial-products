import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { RegisterProductsComponent } from './register-products/register-products.component';
import { ContainerComponentsComponent } from './container-components/container-components.component';
import { FormProductModule } from 'src/app/shared/form-product/form-product.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomButtomModule } from 'src/app/shared/layout/custom-buttom/custom-buttom.module';



@NgModule({
  declarations: [
    HeaderCardComponent,
    ListProductsComponent,
    RegisterProductsComponent,
    ContainerComponentsComponent,

  ],
  imports: [
    CommonModule,
    FormProductModule,
    CustomButtomModule,
    RouterModule, FormsModule,
  ]

})
export class ComponentsModule { }
