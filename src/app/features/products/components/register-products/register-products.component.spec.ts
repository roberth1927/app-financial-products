import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProductsComponent } from './register-products.component';

describe('RegisterProductsComponent', () => {
  let component: RegisterProductsComponent;
  let fixture: ComponentFixture<RegisterProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterProductsComponent]
    });
    fixture = TestBed.createComponent(RegisterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
