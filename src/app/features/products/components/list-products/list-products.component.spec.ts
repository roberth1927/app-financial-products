import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

import { ListProductsComponent } from './list-products.component';
import { ProductsService } from '../../../../../app/features/services/products.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;
  let productService: ProductsService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterModule],
      providers: [ProductsService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map<string, string>().set('someParam', 'someValue')
            }
          }
        }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService);

    const mockProducts = [
      { id: '1', name: 'Product A', description: 'Description A', logo: 'logo1.jpg', dateRelease: new Date(), dateRevision: new Date() },
      { id: '2', name: 'Product B', description: 'Description B', logo: 'logo2.jpg', dateRelease: new Date(), dateRevision: new Date() },
    ];

    spyOn(productService, 'getFilteredProducts').and.returnValue(of(mockProducts));

    fixture.detectChanges();
  });

  it('Creacion de componente con exito', () => {
    expect(component).toBeTruthy();
  });

  it('debe buscar productos en el init', () => {
    expect(component.filteredProducts).toEqual([
      { id: '1', name: 'Product A', description: 'Description A', logo: 'logo1.jpg', dateRelease: jasmine.any(Date), dateRevision: jasmine.any(Date) },
      { id: '2', name: 'Product B', description: 'Description B', logo: 'logo2.jpg', dateRelease: jasmine.any(Date), dateRevision: jasmine.any(Date) },
    ]);
  });

  it('mostrar informacion del producto', () => {
    const productRows = fixture.debugElement.queryAll(By.css('.data-table tbody tr'));
    expect(productRows.length).toBe(2);

    productRows.forEach((row, index) => {
      const product = component.filteredProducts[index];
      const cells = row.queryAll(By.css('td'));

      expect(cells[1].nativeElement.textContent).toContain(product.name);
      expect(cells[2].nativeElement.textContent).toContain(product.description);
    });
  });


  it('debe llamar al método eliminarProducto al hacer clic', () => {
    spyOn(component, 'deleteProduct');
    const deleteButtons = fixture.debugElement.queryAll(By.css('.delete-button'));

    deleteButtons[0].triggerEventHandler('click', null);
    expect(component.deleteProduct).toHaveBeenCalledWith('1');
  });


});
