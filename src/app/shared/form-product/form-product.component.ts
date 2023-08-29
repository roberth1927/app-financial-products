import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {

  form!: FormGroup ;


  constructor(private formBuilder: FormBuilder) {
    this.formInit()
  }


  formInit() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      logo: ['', Validators.required],
      date_release: ['', Validators.required],
      date_revision: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Aquí podrías hacer el envío de los datos al servidor
    } else {
      // El formulario no es válido, puedes mostrar algún mensaje o realizar alguna acción
    }
  }

}
