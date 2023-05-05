import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideabrComponent } from './sideabr/sideabr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { JanComponent } from './jan/jan.component';
import { FebComponent } from './feb/feb.component';
import { MarComponent } from './mar/mar.component';
import { AprComponent } from './apr/apr.component';
import {MatCardModule} from '@angular/material/card';
import { StatComponent } from './stat/stat.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideabrComponent,
    DashboardComponent,
    JanComponent,
    FebComponent,
    MarComponent,
    AprComponent,
    StatComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatCardModule,HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
