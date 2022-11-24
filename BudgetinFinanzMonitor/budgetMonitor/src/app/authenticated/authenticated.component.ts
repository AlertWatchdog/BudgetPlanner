import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { NONE_TYPE } from '@angular/compiler';
import { DOCUMENT } from '@angular/common';
import { Database } from '../database';
import { IYear } from '../datamodel';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css'],
})
export class AuthenticatedComponent implements OnInit {
  cashflowTypes = [
    {value: "Expense", viewValue: "Expense"},
    {value: "Income", viewValue: "Income"},
    {value: "Saving", viewValue: "Saving"},
    {value: "Budget", viewValue: "Budget"}
  ];

  selectedCategory = "none";
  selectedType = "none";

  categories = [{
    name: "Kategorei 1",
    totalExpenses: 299,
    expenses: []
  },
  {
    name: "Kategorei 2",
    totalExpenses: 0,
    expenses: [],
  }]
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
    categoryControl = new FormControl();
    year : IYear = this.db.getEmptyYear();
  constructor(private breakpointObserver: BreakpointObserver, private appComponent: AppComponent, private db: Database) {    
    this.loadUserData();
  }
  dataReady: boolean = false;
  ngOnInit() {
  }

  workingYear = this.year;
  selectedYear = this.year.year;
  selectedMonth = 0;
  loadableYears = [{value: this.year.year, viewValue: this.year.year}];
  loadableMonths = this.year.months;
  loadedYears : IYear[] | undefined;

  async loadUserData(){
    this.year = await this.db.getCurrentYear();
    this.loadableYears[0] = {value: this.year.year, viewValue: this.year.year};
    this.selectedYear = this.year.year;
    this.loadableMonths = this.year.months;
    this.selectedMonth = this.year.months[this.year.months.length - 1].month;
    
  }

  async loadMoreYears(){
    let currentYears = await this.db.getAllYears();
    currentYears.forEach(year => {
      if(year.year !== this.year.year)
        this.loadableYears.push({value: year.year, viewValue: year.year})
    }); 
    if(this.loadableYears.length > 1){
      this.selectedYear = this.loadableYears[1].value;
    }
  }

  changeWorkingYear(){
    if(this.selectedYear === this.year.year){
      this.workingYear = this.year;
    } else if (this.loadedYears !== undefined){
      this.loadedYears.forEach(yr => {
        if(yr.year === this.selectedYear){
          this.workingYear = yr;
        }
      })
    }
  }

  openModal(){
    let cont = document.getElementById("navcont");
    let modal = document.getElementById("modal");
    if(cont != null && modal != null){
      cont.style.zIndex = "-2";
      modal.style.display = "inline-block";
    }
  }

  closeModal(){
    let cont = document.getElementById("navcont");
    let modal = document.getElementById("modal");
    if(cont != null && modal != null){
      cont.style.zIndex = "1";
      modal.style.display = "none";
    }
  }

  matcher = new ErrorStateMatcher();
  
  typeFormControl = new FormControl('', [
    Validators.required,
  ]);
  categoryFormControl = new FormControl('', [
    Validators.required,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  newCatFormControl = new FormControl('', [
    Validators.required, //Vervollständigen
  ]);
  amountFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]*([\.\,][0-9]{1,2})?"),
    this.amountZero
  ]);
  monthlyFormControl = new FormControl('', [
    Validators.required,
  ]);
  cashSavingControl = new FormControl('', [
    Validators.required,
  ]);
  automaticSavingFormControl = new FormControl('', [
    Validators.required,
  ]);

  changeAutomaticSavingCheckboxVisibility(){
    let checkbox = document.getElementById("automaticSaving");
    if(checkbox !== null){
      if(this.selectedType === "Budget"){
        checkbox.style.visibility = "visible";
      }else{
        checkbox.style.visibility = "hidden";
      }
    }
  }

  amountZero(control: FormControl){
    let value = control.value.replace(',', '.');
  
    if(parseFloat(value) !== 0){   
      return null;
    } else {
      return {description: "value zero"};
    }
  }

  saveNewCashflows(){
    alert("success");
  }

}
