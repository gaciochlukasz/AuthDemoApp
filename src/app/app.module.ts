import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/http-interceptor.service';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import * as FromAuth from './state/auth/auth.reducer';
import * as FromUser from './state/user/user.reducer';
import { AuthEffects } from './state/auth/auth.effects';
import { UserEffects } from './state/user/user.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: FromAuth.reducer, user: FromUser.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects, UserEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
