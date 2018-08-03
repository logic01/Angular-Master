import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { accountReducer } from './ngrx/reducers/account.reducers';
import { CreateAccountComponent } from './website/account/create-account/create-account.component';
import { EditAccountComponent } from './website/account/edit-account/edit-account.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    StoreModule.forRoot({ account: accountReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
