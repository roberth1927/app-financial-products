import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './pages/home-products/home-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HeaderCardComponent } from './components/header-card/header-card.component';


const routes: Routes = [
  {
    component: HomeProductsComponent,
    path: '',
    children: [
      { path: '',
      component: ListProductsComponent
      },


  ]

  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
