import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent {
  constructor(private _budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    if (this._budgetService.budget == 0) {
      this.router.navigate(['/entry']);
    }
  }
}
