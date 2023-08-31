import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './home-products.component';
import { RegisterProductsComponent } from '../../components/register-products/register-products.component';
import { ContainerComponentsComponent } from '../../components/container-components/container-components.component';

const routes: Routes = [
  {
    component: HomeProductsComponent,
    path: '',
    children: [
      { path: '', component: ContainerComponentsComponent },
      { path: 'register', component: RegisterProductsComponent },
      { path: 'edicion/:id?', component: RegisterProductsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
