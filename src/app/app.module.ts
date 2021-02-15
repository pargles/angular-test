import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { CustomersModule } from './customers/customers.module';
// import { AppComponent }  from './app.component';

// @NgModule({
//   imports:      [ BrowserModule, CustomersModule ],
//   declarations: [ AppComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
