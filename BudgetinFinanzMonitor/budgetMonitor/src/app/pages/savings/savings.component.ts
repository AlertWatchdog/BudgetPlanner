import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ISavingsCategory, ICashflow } from 'src/app/datamodel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  dataSource = new MatTableDataSource<ISavingsCategory>(CATEGORIES);
  displayedColumns = ["categoryName", "expenseAmount"];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isExpansionDetailRow = (index: any, row: { hasOwnProperty: (arg0: string) => void; }) => row.hasOwnProperty('detailRow');

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: ISavingsCategory, filter: string) => { 
      let dataStr = data.name + data.totalSavings;
      data.savings.forEach(element => {
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

const CATEGORIES: ISavingsCategory[] = [{
  name: "Kategorei 1",
  totalSavings: 299,
  savings: EXPENSES
},
{
  name: "Kategorei 2",
  totalSavings: 0,
  savings: [],
}];
