import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatBadgeModule} from '@angular/material/badge'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatCardModule} from '@angular/material/card'
import {MatChipsModule} from '@angular/material/chips'
import {MatDialogModule} from '@angular/material/dialog'
import {MatDividerModule} from '@angular/material/divider'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatRippleModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio'
import {MatSliderModule} from '@angular/material/slider'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatStepperModule} from '@angular/material/stepper'
import {MatTabsModule} from '@angular/material/tabs'
import {MatTreeModule} from '@angular/material/tree'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { BudgetsComponent } from './pages/budgets/budgets.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { Database } from './database';

//import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    BudgetsComponent,
    ExpensesComponent,
    IncomesComponent,
    OverviewComponent,
    AuthenticatedComponent,
    SavingsComponent,
    CdkDetailRowDirective,
    //HighchartsChartComponent
  ],
  imports: [
    MatTreeModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatRippleModule,
    MatProgressBarModule,
    MatMenuModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatBadgeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    //MatDatepickerModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    CdkTableModule,
    CdkTreeModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [Database],
  bootstrap: [AppComponent]
})
export class AppModule { }
