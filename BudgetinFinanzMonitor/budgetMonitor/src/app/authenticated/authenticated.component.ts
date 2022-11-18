import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UntypedFormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {
  cashflowTypes = [
    {value: "Expense", viewValue: "Expense"},
    {value: "Income", viewValue: "Income"},
    {value: "Saving", viewValue: "Saving"},
    {value: "budget", viewValue: "Budget"}
  ];

  selectedCategory = "none";

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
  
    categoryControl = new UntypedFormControl();

  constructor(private breakpointObserver: BreakpointObserver, private appComponent: AppComponent) {    
  }
  dataReady: boolean = false;
  ngOnInit() {
  }

  async loadUserData(){
    
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
  
  typeFormControl = new UntypedFormControl('', [
    Validators.required,
  ]);
  categoryFormControl = new UntypedFormControl('', [
    Validators.required,
  ]);
  nameFormControl = new UntypedFormControl('', [
    Validators.required,
  ]);
  newCatFormControl = new UntypedFormControl('', [
    Validators.required, //Vervollständigen
  ]);
  amountFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern("[0-9]*([\.\,][0-9]{1,2})?"),
    this.amountZero
  ]);
  monthlyFormControl = new UntypedFormControl('', [
    Validators.required,
  ]);
  cashSavingControl = new UntypedFormControl('', [
    Validators.required,
  ]);

  amountZero(control: UntypedFormControl){
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
