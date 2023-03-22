import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-entry-bill',
  templateUrl: './entry-bill.component.html',
  styleUrls: ['./entry-bill.component.css'],
})
export class EntryBillComponent {
  nameBill: string;
  quantity: number;
  formWrogn: boolean;
  textWrogn: string;

  constructor(private _budgetService: BudgetService) {
    this.nameBill = '';
    this.quantity = 0;
    this.formWrogn = false;
    this.textWrogn = '';
  }

  addBill() {
    if (this.quantity > this._budgetService.remaining) {
      this.formWrogn = true;
      this.textWrogn = `No hay saldo suficiente`;
      return;
    }

    if (this.nameBill == '' || this.quantity < 1) {
      this.formWrogn = true;
      this.textWrogn = 'Nombre gasto o cantidad incorrecto';
    } else {
      // Crear el objeto
      const BILL = {
        name: this.nameBill,
        quantity: this.quantity,
      };
      // Enviar objeto a suscrtiptores
      this._budgetService.addBill(BILL);
      // Limpair formulario
      this.formWrogn = false;
      this.nameBill = '';
      this.quantity = 0;
    }
  }

  ngOnInit(): void {}
}
