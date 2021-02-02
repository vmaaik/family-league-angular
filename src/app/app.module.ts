import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoundComponent } from './round/round.component';
import { SeasonComponent } from './season/season.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChampionComponent } from './champion/champion.component';
import { CharityComponent } from './charity/charity.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RoundComponent,
    SeasonComponent,
    CalendarComponent,
    ChampionComponent,
    CharityComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
