import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoundComponent} from './round/round.component';
import {SeasonComponent} from './season/season.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ChampionComponent} from './champion/champion.component';
import {CharityComponent} from './charity/charity.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GeneralInterceptor} from './shared/general.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import {MaterialModule} from './material.module';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoundComponent,
    SeasonComponent,
    CalendarComponent,
    ChampionComponent,
    CharityComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: GeneralInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
