import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeProductsComponent } from './products/pages/home-products/home-products.component';


const routes: Routes = [
  {

    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)

      },
      {
        path: '**',
        redirectTo: 'home'
      }

    ]
  }

]


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FeaturesRoutingModule { }
