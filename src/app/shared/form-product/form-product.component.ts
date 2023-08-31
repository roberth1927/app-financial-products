import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/features/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();

  form!: FormGroup;
  idExistsError: boolean = false;
  flag: boolean = false;
  productId: string = '';
  todayDate: string;

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formInit();
    this.todayDate = this.todayD(new Date());
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id?'];
      if (this.productId) {
        this.flag = true;
        this.editProduct();
      }
    });
  }

  formInit() {
    this.form = this.formBuilder.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      logo: ['', Validators.required],
      date_release: ['', Validators.required],
      date_revision: ['', Validators.required],
    });
  }

  onBlurProductId() {
    const id = this.form.get('id')?.value;
    if (id) {
      this.productService.validateProductId(id).subscribe((response) => {
        if (response) {
          this.idExistsError = true;
          setTimeout(() => {
            this.idExistsError = false;
            this.form.get('id')?.reset();
          }, 2000);
        }
      });
    }
  }

  editProduct() {
    this.productService.getById(this.productId).subscribe((product) => {
      if (product) {
        const dateRelease = new Date(product.dateRelease);
        const DateRelease = this.formatDate(dateRelease);

        const dateRevision = new Date(product.dateRevision);
        const DateRevision = this.formatDate(dateRevision);

        this.form.patchValue({
          id: product.id,
          name: product.name,
          description: product.description,
          logo: product.logo,
          date_release: DateRelease,
          date_revision: DateRevision,
        });
      }
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  onDateReleaseChange() {
    const releaseDate = this.form.get('date_release')?.value;
    if (releaseDate) {
      const oneYearInMillis = 365 * 24 * 60 * 60 * 1000;
      const releaseDateObj = new Date(releaseDate);
      const revisionDate = new Date(releaseDateObj.getTime() + oneYearInMillis);
      this.form.patchValue({
        date_revision: revisionDate.toISOString().substring(0, 10),
      });
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas guardar el registro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        this.formSubmitted.emit(this.form.value);
        Swal.fire('Guardado', 'Registro guardado', 'success');
      } else {
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  resetForm() {
    this.form.reset();
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('minlength')) {
      return `Debe tener al menos ${
        control.getError('minlength').requiredLength
      } caracteres`;
    }
    if (control?.hasError('maxlength')) {
      return `Debe tener como máximo ${
        control.getError('maxlength').requiredLength
      } caracteres`;
    }
    return '';
  }

  todayD(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnDestroy() {
    /*     this.subscription.unsubscribe();
     */
  }
}
