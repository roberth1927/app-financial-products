import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../core/ProductInterface';
import { ProductsService } from 'src/app/features/services/products.service';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  animations: [
    trigger('fadeAndMoveUp', [
      transition('* => void', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(-50px)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ListProductsComponent implements OnInit {
  filteredProducts: Product[] = [];
  filteredProductsPaginados: Product[] = [];
  recordsPerPage: number = 5;
  opcionesSelect: number[] = [];
  deletedProducts: string[] = [];
  defaultLogoUrl =
    'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg';

  tableHeaders: string[] = [
    'Logo',
    'Nombre del producto',
    'Descripción',
    'Fecha de liberación',
    'Fecha de reestructuración',
    '',
  ];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getFilteredProducts().subscribe((filteredProducts) => {
      this.filteredProducts = filteredProducts;

      this.onRecordsPerPageChange();
    });
    this.productService.getData().subscribe();
  }

  onRecordsPerPageChange() {
    this.filteredProductsPaginados = this.filteredProducts.slice(
      0,
      this.recordsPerPage
    );
    this.selectPaginate();
  }
  selectPaginate() {
    this.opcionesSelect = [];
    const cantidadRegistros = this.filteredProducts.length;
    const incremento = 5;

    for (let i = incremento; i <= cantidadRegistros; i += incremento) {
      this.opcionesSelect.push(i);
    }

    if (cantidadRegistros % incremento !== 0) {
      this.opcionesSelect.push(cantidadRegistros);
    }
  }

  isProductDeleted(product: Product): boolean {
    return this.deletedProducts.includes(product.id);
  }

  async deleteProduct(product: Product) {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará este producto permanentemente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      });
      if (result.isConfirmed) {
        Swal.fire('Eliminar', 'Registro eliminado', 'success');

        this.deletedProducts.push(product.id);

        setTimeout(() => {
          this.filteredProducts = this.filteredProducts.filter(
            (p) => p.id !== product.id
          );
          this.deletedProducts = this.deletedProducts.filter(
            (id) => id !== product.id
          );
          this.onRecordsPerPageChange();
        }, 1200);
      }
    } catch (error) {}
  }

  isValidUrl(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }
}
