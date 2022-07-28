import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class HttpUtils {
  constructor(private http: HttpClient) {}

  httpGet(url: string) {
    return this.http
      .get(url).pipe(
      map((res: any) => this.handleResponse(res)))
  }
    
    private handleResponse(res: any): any {
    try {
      return res.json();
    } catch (error) {
      return res;
    }
  }
}