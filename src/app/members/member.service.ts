import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from './member';

@Injectable()
export class MemberService {

  private url = 'http://localhost:3000/members';

  constructor(
    private http: Http
  ) {}

  getMembers(): Observable<Member[]> {
    return this.http.get(this.url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMember(id: number): Observable<Member> {
    const memUrl = `${this.url}/${id}`;
    return this.http.get(memUrl)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMembersByType(type: string): Observable<Member[]> {
    return this.http.get(`${this.url}/?type=${type}`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
