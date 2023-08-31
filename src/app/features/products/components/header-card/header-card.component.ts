import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/features/services/products.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.css']
})
export class HeaderCardComponent {

  constructor(private productService: ProductsService) { }

  onFilterChange(event: any) {
    const value = event?.target?.value || '';
    this.productService.setFilter(value);
  }

}
