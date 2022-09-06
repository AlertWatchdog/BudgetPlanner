import { Component, OnInit, ViewChild } from '@angular/core';
import { IBudget, IExpenseCategory } from 'src/app/datamodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {
  constructor() { }
  dataSource = new MatTableDataSource<IBudget>(BUDGETS);
  displayedColumns = ["budgetName", "budgetSize", "budgetUsed", "budgetLeft"];
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isExpansionDetailRow = (index: any, row: { hasOwnProperty: (arg0: string) => void; }) => row.hasOwnProperty('detailRow');

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: IBudget, filter: string) => { 
      let dataStr = data.name + data.size + data.spent;
      data.addedCategories.forEach(element => {
        dataStr += element.name;
        dataStr += element.totalExpenses;
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

const addedCategories: IExpenseCategory[] = [{
  name: "Kategorei 1",
  totalExpenses: 500,
  expenses: []
},
{
  name: "Kategorei 2",
  totalExpenses: 0,
  expenses: [],
}];
const BUDGETS: IBudget[] =[{
  name: "Einkauf",
  size: 1000,
  spent: 500,
  addedCategories: addedCategories
}, {
  name: "Motorrad",
  size: 200,
  spent: 0,
  addedCategories: []

}];

