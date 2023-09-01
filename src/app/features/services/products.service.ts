import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, filter, map, tap } from 'rxjs';
import { Product } from 'src/core/ProductInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private dataProducts: any[] = [];
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  private apiUrl = `${environment.apiUrl}/bp/products`;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any[]>(this.apiUrl).pipe(map(
      ((data) => {
      const transformedData: Product[] = data.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        logo: item.logo,
        dateRelease: item.date_release,
        dateRevision: item.date_revision,
      }));
      const reversedData = transformedData.reverse();
      this.dataProducts = reversedData;
      this.filteredProductsSubject.next(transformedData);

      return transformedData;

    })));
  }

  getById(_id: string) {
    return this.getData().pipe(
      map(data => data.find(p => p.id === _id))
    );
  }

  validateProductId(id: string){
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(`${this.apiUrl}/verification`, { params });
  }

  setFilter(filter: string) {
    const filteredProducts = this.dataProducts.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
    );
    this.filteredProductsSubject.next(filteredProducts);
  }

  getFilteredProducts(): Observable<any[]> {
    return this.filteredProductsSubject.asObservable().pipe();
  }

  postProduct(body: Product) {
    return this.http.post(`${this.apiUrl}`, body);
  }

  putProduct(body: Product) {
    return this.http.put(`${this.apiUrl}`, body)
  }

  deleteProduct(id: string) {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiUrl}`, { params });
  }

  setRecordsPerPage(recordsPerPage: number) {
    this.filteredProductsSubject.next(this.dataProducts.slice(0, recordsPerPage));
  }

}
