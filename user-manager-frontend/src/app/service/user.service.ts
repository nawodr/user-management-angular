import { Injectable } from '@angular/core';
import { HttpUtils } from '../utils/http-util';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
@Injectable()
export class UserService {
  constructor(private https: HttpUtils, private http: HttpClient) {}

  //   getUser(): any {
  //     let url = 'http://localhost:3001/api/user/';
  //     return this.https.httpGet(url);
  //   }
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getUsers(): Observable<object> {
    let url = 'http://localhost:3001/api/user/';
    return this.http.get(url);
  }

  saveUser(data: any) {
    let url = 'http://localhost:3001/api/user/';
    return this.http.post(url, data).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }

  deleteUser(id: String) {
    let url = 'http://localhost:3001/api/user/' + id;
    return this.http.delete(url).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }

  updateUser(data: any) {
    let url = 'http://localhost:3001/api/user/';
    return this.http.put(url, data).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }
}
