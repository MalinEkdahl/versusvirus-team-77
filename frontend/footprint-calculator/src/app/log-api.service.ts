import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogApiService {

  constructor(private http: HttpClient) { }

  log(json: Object) {
    this.http.post(environment.logApi + "/answer", json).toPromise()
  }
}
