import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from './member';

@Injectable()
export class MemberService {

  private url = 'https://my-json-server.typicode.com/jaymanx4life/tsc-angular';

  constructor(
    private http: Http
  ) {}

  getMembers(): Observable<Member[]> {
    return this.http.get(this.url)
        .map((res: Response) => res.json())
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
