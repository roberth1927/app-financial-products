import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { environment } from '../../../environments/environment';
import { Product } from 'src/core/ProductInterface';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('debe buscar y transformar datos', () => {
      const testData = [
        { id: '1', name: 'Product A', description: 'Description A', logo: 'logo1.jpg', date_release: '2023-08-24', date_revision: '2024-08-24' },
        { id: '2', name: 'Product B', description: 'Description B', logo: 'logo2.jpg', date_release: '2023-08-25', date_revision: '2024-08-25' },
      ];

      service.getData().subscribe((data: Product[]) => {
        expect(data.length).toBe(2);
        expect(data[0].name).toBe('Product A');
        expect(data[1].description).toBe('Description B');
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/bp/products`);
      expect(req.request.method).toBe('GET');
      req.flush(testData);
    });
  });


});
