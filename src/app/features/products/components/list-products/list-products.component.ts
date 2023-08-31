import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../core/ProductInterface';
import { ProductsService } from 'src/app/features/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  filteredProducts: Product[] = [];
  filteredProductsPaginados: Product[] = [];
  recordsPerPage: number = 5;
  opcionesSelect: number[] = [];
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

  async deleteProduct(id: string) {
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

        this.filteredProducts = this.filteredProducts.filter(
          (product) => product.id !== id
        );
        this.onRecordsPerPageChange();
        //TODO: error en endpoint
        //this.productService.deleteProduct(id).subscribe()
      } else {
      }
    } catch (error) {}
  }

  isValidUrl(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }
}
