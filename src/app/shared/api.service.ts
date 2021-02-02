import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  public get(uri: string, options?: {}) {
    return this.httpClient.get(environment.baseApiUrl + uri, options);
  }
}
