import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FundListComponent} from './fund-list/fund-list.component';
import {FormsModule} from "@angular/forms";
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import {CommonModule} from "@angular/common";
import { FundDashboardComponent } from './fund-dashboard/fund-dashboard.component';
import { InvestorSummaryComponent } from './investor-summary/investor-summary.component';
import { FundPerformanceComponent } from './fund-performance/fund-performance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundListComponent,
    PageNotfoundComponent,
    FundDashboardComponent,
    InvestorSummaryComponent,
    FundPerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
