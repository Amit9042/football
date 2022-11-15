import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@sharedModule/shared.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FakeAPIService } from './private-modules/_fake';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
        passThruUnknownUrl: true,
        dataEncapsulation: false,
      })
      : [],
    // #fake-end#
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
