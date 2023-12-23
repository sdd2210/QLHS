import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderService } from 'src/app/services/loader.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { APIInterceptor } from './utils/interceptors/api.interceptor';
import { AuthInterceptor } from './utils/interceptors/auth.interceptor';
import { NgxEditorModule } from 'ngx-editor';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessComponent } from './components/pop-up/success/success.component';
import { FailComponent } from './components/pop-up/fail/fail.component';

@NgModule({
  declarations: [
    AppComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    NgxSpinnerModule,
    NgxEditorModule,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
