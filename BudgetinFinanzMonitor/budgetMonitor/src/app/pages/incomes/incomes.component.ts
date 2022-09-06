import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IIncomeCategory, ICashflow } from 'src/app/datamodel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  constructor() { }

  dataSource = new MatTableDataSource<IIncomeCategory>(CATEGORIES);
  displayedColumns = ["categoryName", "expenseAmount"];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isExpansionDetailRow = (index: any, row: { hasOwnProperty: (arg0: string) => void; }) => row.hasOwnProperty('detailRow');

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: IIncomeCategory, filter: string) => { 
      let dataStr = data.name + data.totalIncome;
      data.incomes.forEach(element => {
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
    this.dataSource.filter = filterValue;
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

const CATEGORIES: IIncomeCategory[] = [{
  name: "Kategorei 1",
  totalIncome: 299,
  incomes: EXPENSES
},
{
  name: "Kategorei 2",
  totalIncome: 0,
  incomes: [],
}];
