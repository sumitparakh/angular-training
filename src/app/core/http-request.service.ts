import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJson } from './types';

interface IStudent {
  name: string;
  contact: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {
    console.log('HttpService');
  }

  get(url: string): Observable<IJson> {
    return this.http.get<IJson>(url);
  }

  post(url: string, params: any) {
    return this.http.post(url, params);
  }

  delete() {
    this.http.delete('');
  }
}
