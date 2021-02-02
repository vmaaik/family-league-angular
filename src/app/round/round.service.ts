import {Inject, Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {environment} from '../../environments/environment';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor(private apiService: ApiService) {
  }

  public getActiveRoundResults() {
    this.apiService.get(environment.roundResultUri,
      {params: new HttpParams().set('status', 'ACTIVE')})
      .subscribe(response => console.log(response));
  }


}
