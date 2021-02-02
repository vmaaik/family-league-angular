import {Component, OnInit} from '@angular/core';
import {RoundService} from './round/round.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Liga';


  constructor(private roundService: RoundService) {
  }

  ngOnInit(): void {
    this.roundService.getActiveRoundResults();
  }



}
