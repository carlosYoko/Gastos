import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  quantity: number;
  quiantityWrong: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.quantity = 0;
    this.quiantityWrong = false;
  }

  add() {
    if (this.quantity > 0) {
      this.quiantityWrong = false;
      this._budgetService.budget = this.quantity;
      this._budgetService.remaining = this.quantity;
      this.router.navigate(['/bills']);
    } else {
      this.quiantityWrong = true;
    }
  }
}
