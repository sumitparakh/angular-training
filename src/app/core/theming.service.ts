import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';

interface ITheme {
  name: 'Dark Mode' | 'Light Mode';
  code: 'dark' | 'light';
}

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  /**
   *
   * <access-specifier> <object-name>: <Class-Name>
   *
   * const/var/let <variable-name> = new <Function/Class Name>;
   */
  constructor(private http: HttpRequestService) {}

  update(theme: ITheme) {
    return this.http.post('', {code: theme.code});
  }
}
