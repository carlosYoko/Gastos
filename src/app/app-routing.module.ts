import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './components/bills/bills.component';
import { EntryComponent } from './components/entry/entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
  { path: 'entry', component: EntryComponent },
  { path: 'bills', component: BillsComponent },
  { path: '**', redirectTo: '/entry', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
