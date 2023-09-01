import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/features/services/products.service';
import { FormProductComponent } from 'src/app/shared/form-product/form-product.component';

@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styleUrls: ['./register-products.component.css'],
  animations: [
    trigger('slideAndBounce', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '900ms ease-in-out',
          keyframes([
            style({ transform: 'translateY(-100%)', opacity: 0 }),
            style({ transform: 'translateY(0)', opacity: 1 }),
            style({ transform: 'translateY(-30px)' }),
            style({ transform: 'translateY(0)' }),
            style({ transform: 'translateY(-15px)' }),
            style({ transform: 'translateY(0)' }),
          ])
        ),
      ]),
    ]),
    trigger('hrAnimation', [
      transition('void => *', [
        style({ borderColor: 'transparent' }),
        animate('900ms', style({ borderColor: 'yellow' })),
        animate('900ms', style({ borderColor: 'transparent' })),
      ]),
    ]),
  ],
})
export class RegisterProductsComponent implements OnInit {
  @ViewChild('productForm') productForm!: FormProductComponent;
  flag: Boolean = false;
  productId: string = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id?'];
      if (this.productId) this.flag = true;
    });
  }

  handleFormSubmit(formData: any) {
    if (this.productId) {
      this.productService.putProduct(formData).subscribe((r) => {
        this.router.navigate(['/home']);
      });
    } else {
      this.productService.postProduct(formData).subscribe(
        (r) => {
          this.productForm.formInit();
          this.router.navigate(['/home']);
        },
        (err) => {}
      );
    }
  }
}
