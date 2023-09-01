import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/features/services/products.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.css'],
  animations: [
    trigger('inputAnimation', [
      transition('void => *', [
        style({ transform: 'translateY(-50%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('buttonAnimation', [
      transition('void => *', [
        style({ transform: 'translateY(-50%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HeaderCardComponent {

  constructor(private productService: ProductsService) { }

  onFilterChange(event: any) {
    const value = event?.target?.value || '';
    this.productService.setFilter(value);
  }

}
