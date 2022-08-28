import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';
import { TechComponent } from './tech/tech.component';
import { BussnessComponent } from './bussness/bussness.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    BussnessComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    LoadingBarHttpClientModule
    
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
