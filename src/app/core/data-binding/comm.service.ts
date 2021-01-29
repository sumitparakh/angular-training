import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IJson } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  nameActivity$ = new Subject();
  FetchedGithubData$ = new Subject();

  githubData: IJson = {};

  constructor() { }

  nameClicked(data: any) {
    this.nameActivity$.next(data);
  }

  saveGithubData(data: IJson) {
    this.githubData = data;
    this.FetchedGithubData$.next(data);
  }
}
