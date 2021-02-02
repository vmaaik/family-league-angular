import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoundComponent} from './round/round.component';
import {SeasonComponent} from './season/season.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ChampionComponent} from './champion/champion.component';
import {CharityComponent} from './charity/charity.component';

const routes = [
  {path: 'round', component: RoundComponent},
  {path: 'season', component: SeasonComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'champion', component: ChampionComponent},
  {path: 'charity', component: CharityComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
