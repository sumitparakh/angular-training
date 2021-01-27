import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IStudent {
  name: string;
  contact: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) {
    console.log('HttpService');
  }

  get() {

  }

  post(url: string, params: any) {
    return this.http.post(url, params);
  }

  delete() {
    this.http.delete('')
  }

}
