import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';
import {environment as env} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userSubject = new BehaviorSubject<User>(null);
  currentUser = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  get currentUserValue() {
    return this.userSubject.value;
  }

  getUser(firstName: string, lastName: string) {
    const endPoint = `${env.baseURL}/users`;
    const body = `firstName=${firstName}&lastName=${lastName}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.httpClient.post<any>(endPoint, body, {headers})
      .pipe(map(response => {
        if (response && response.status) {
          const users: User[] = response.users;
          console.log(users);
          this.userSubject.next(users[1]);
        }
        return response;
      }));
  }
}
