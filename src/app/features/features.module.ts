import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutModule } from '../shared/layout/layout.module';



@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutModule
  ]
})
export class FeaturesModule { }
