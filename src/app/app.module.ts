import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { EntryComponent } from './components/entry/entry.component';
import { EntryBillComponent } from './components/entry-bill/entry-bill.component';
import { ListBillComponent } from './components/list-bill/list-bill.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    EntryComponent,
    EntryBillComponent,
    ListBillComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
