import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {ICashflow, IExpenseCategory} from '../../datamodel';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpensesComponent implements OnInit {

  constructor() {
    
   }

  dataSource = new MatTableDataSource<IExpenseCategory>(CATEGORIES);
  displayedColumns = ["categoryName", "expenseAmount"];
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isExpansionDetailRow = (index: any, row: { hasOwnProperty: (arg0: string) => void; }) => row.hasOwnProperty('detailRow');

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: IExpenseCategory, filter: string) => { 
      let dataStr = data.name + data.totalExpenses;
      data.expenses.forEach(element => {
        dataStr += element.name;
        dataStr += element.date.toDateString();
        dataStr += element.amount;
      });
      dataStr = dataStr.toLowerCase();
      return dataStr.includes(filter, 0);
    };
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue
  }
}

const EXPENSES: ICashflow[] =[{
  name: "Einkauf",
  amount: 99,
  date: new Date("01.01.2020"),
  monthly: false
}, {
  name: "Test",
  amount: 200,
  date: new Date("01.01.2020"),
  monthly: true

}];

const CATEGORIES: IExpenseCategory[] = [{
  name: "Kategorei 1",
  totalExpenses: 299,
  expenses: EXPENSES
},
{
  name: "Kategorei 2",
  totalExpenses: 0,
  expenses: [],
}];