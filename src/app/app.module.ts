import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountEffects } from './ngrx/effects/account.effects';
import { accountReducer } from './ngrx/reducers/account.reducers';
import { layoutReducer } from './ngrx/reducers/layout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HeadersInterceptor } from './api/interceptors/headers.interceptor';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { MatModule } from './design/mat.module';
import { CreateAccountComponent } from './website/account/create-account/create-account.component';
import { EditAccountComponent } from './website/account/edit-account/edit-account.component';
import { ArticleComponent } from './website/blog/article/article.component';
import { BlogComponent } from './website/blog/blog/blog.component';
import { ExamplesComponent } from './website/examples/examples.component';
import { ProfileComponent } from './website/profile/profile.component';
import { ToolbarComponent } from './website/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    EditAccountComponent,
    ToolbarComponent,
    ExamplesComponent,
    BlogComponent,
    ArticleComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutes,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatModule,
    StoreModule.forRoot({ account: accountReducer, layout: layoutReducer }),
    EffectsModule.forRoot([AccountEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
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
