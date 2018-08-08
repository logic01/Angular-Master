import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountEffects } from './ngrx/effects/account.effects';
import { accountReducer } from './ngrx/reducers/account.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeadersInterceptor } from './api/interceptors/headers.interceptor';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './website/account/create-account/create-account.component';
import { EditAccountComponent } from './website/account/edit-account/edit-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    EditAccountComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    StoreModule.forRoot({ account: accountReducer }),
    EffectsModule.forRoot([AccountEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
