import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FundListComponent} from './fund-list/fund-list.component';
import {FormsModule} from "@angular/forms";
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundListComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
