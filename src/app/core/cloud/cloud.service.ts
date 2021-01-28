import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { LogService } from '../log.service';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  constructor(private http: HttpRequestService, private log: LogService) {}

  getCloudData() {
    // this.http.request()
    return { data: 'My cloud data' };
  }
}
