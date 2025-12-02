import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra-component',
  templateUrl: './compra-component.component.html',
  styleUrl: './compra-component.component.scss'
})
export class CompraComponentComponent {
   paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      nombre: ["", Validators.required],
      numero: ["", [Validators.required, Validators.minLength(16)]],
      fecha: ["", [Validators.required, Validators.minLength(5)]],
      cvv: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  procesarPago() {
    if (this.paymentForm.valid) {
      console.log("Datos enviados:", this.paymentForm.value);
      alert("Pago procesado correctamente (simulación)");
    }
  }
}
