import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { FormProductComponent } from './form-product.component';
import { ProductsService } from 'src/app/features/services/products.service';

describe('FormProductComponent', () => {
  let component: FormProductComponent;
  let fixture: ComponentFixture<FormProductComponent>;
  let productService: ProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        ProductsService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({ 'id?': '1' }) }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService);

    spyOn(productService, 'validateProductId').and.returnValue(of(false));
    spyOn(productService, 'getById').and.returnValue(of({
      id: '1',
      name: 'Product A',
      description: 'Description A',
      logo: 'logo1.jpg',
      dateRelease: new Date(),
      dateRevision: new Date()
    }));

    fixture.detectChanges();
  });

  it('crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe completar los campos del formulario', () => {
    expect(component.flag).toBe(true);
    expect(component.form.value.id).toBe('1');
    expect(component.form.value.name).toBe('Product A');
    expect(component.form.value.description).toBe('Description A');
    expect(component.form.value.logo).toBe('logo1.jpg');
  });

  it('debe establecer date_revision basado en date_release', () => {
    const releaseDate = new Date('2023-08-24');
    component.form.get('date_release')?.setValue(releaseDate.toISOString().substring(0, 10));
    component.onDateReleaseChange();
    const expectedRevisionDate = new Date(releaseDate.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expectedRevisionDateString = expectedRevisionDate.toISOString().substring(0, 10);
    expect(component.form.value.date_revision).toBe(expectedRevisionDateString);
  });

  it('debe llamar a onSubmit cuando el formulario sea valido', fakeAsync(() => {
    spyOn(component, 'onSubmit');
    component.form.get('id')?.setValue('validId');
    component.form.get('name')?.setValue('Valid Name');
    component.form.get('description')?.setValue('Valid Description');
    component.form.get('logo')?.setValue('logo.jpg');
    component.form.get('date_release')?.setValue('2023-08-24');
    component.form.get('date_revision')?.setValue('2024-08-24');
    component.formSubmitted.subscribe(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
    component.onSubmit();
    tick();
  }));
});

