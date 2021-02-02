import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav;
  headerObservable = new Subscription();

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {

    this.headerObservable = this.headerService.toggleMenuSubject.subscribe(() => {
        this.sidenav.toggle();
      }
    );
  }

  ngOnDestroy(): void {
    this.headerObservable.unsubscribe();
  }

}
