import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticatedComponent} from './authenticated/authenticated.component'
import {OverviewComponent} from './pages/overview/overview.component'
import {ExpensesComponent} from './pages/expenses/expenses.component'
import {IncomesComponent} from './pages/incomes/incomes.component'
import {BudgetsComponent} from './pages/budgets/budgets.component'
import { SavingsComponent } from './pages/savings/savings.component';

const routes: Routes = [
  {path:'', component: AuthenticatedComponent, children: [
    {path:'dashboard', component: OverviewComponent},
    {path:'', redirectTo:'dashboard', pathMatch: 'full'},
    {path:'expenses', component: ExpensesComponent},
    {path:'incomes', component: IncomesComponent},
    {path:'budgets', component: BudgetsComponent},
    {path:'savings', component: SavingsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
