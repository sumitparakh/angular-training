import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    console.log('LogService');
  }

  info(message: string, data?: any) {
    console.info(message, data);
  }

  log(message: string, data?: any) {
    console.log(message, data);
  }

  error(message: string, data?: any) {
    console.error(message, data);
  }

  warning(message: string, data?: any) {
    console.warn(message, data);
  }

}
