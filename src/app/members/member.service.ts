import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from './member';

@Injectable()
export class MemberService {

  private url = 'https://my-json-server.typicode.com/jaymanx4life/tsc-angular/members';

  constructor(
    private http: Http
  ) {}

  getMembers(): Observable<Member[]> {
    const response: Observable<Response> =  this.http.get(this.url);
    response.subscribe(resp => {
          console.log(resp.headers.get('X-Custom-Header'));
          console.log(resp.headers.append('content-type', 'application/json'));
        });
      return response.map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMember(id: number): Observable<Member> {
    return this.http.get(`${this.url}/${id}`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMembersByType(type: string): Observable<Member[]> {
    return this.http.get(`${this.url}/?type=${type}`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
