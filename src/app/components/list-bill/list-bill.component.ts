import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css'],
})
export class ListBillComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  remaining: number;
  listBills: any[] = [];

  constructor(private _budgetService: BudgetService) {
    this.budget = 0;
    this.remaining = 0;
    this.subscription = this._budgetService.getBills().subscribe((data) => {
      this.remaining = this.remaining - data.quantity;
      this.listBills.push(data);
    });
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remaining = this._budgetService.remaining;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyColour() {
    if (this.budget / 4 > this.remaining) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.remaining) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

  deleteBill(index: number, bill: any) {
    this.remaining = this.remaining + bill.quantity;
    this.listBills.splice(index, 1);
  }
}
