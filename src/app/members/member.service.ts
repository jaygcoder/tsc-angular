import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from './member';


/* Mock data
const MEMBERS: Member[] = [
  {
    id: 1,
    codeName: 'Jayman X',
    firstName: 'Jay',
    lastName: 'Garcia'
  }, {
    id: 2,
    codeName: 'xebec',
    firstName: 'Franklin Christopher',
    lastName: 'Lina'
  }, {
    id: 3,
    codeName: 'Kit',
    firstName: 'Cakit',
    lastName: 'Yee'
  }, {
    id: 4,
    codeName: 'Fonz',
    firstName: 'Alfonso',
    lastName: 'Abueleja'
  }, {
    id: 5,
    codeName: 'Dalerub',
    firstName: 'Dale',
    lastName: 'Rubio'
  }, {
    id: 6,
    codeName: 'Big Boss Mike',
    firstName: 'Mike',
    lastName: 'BBM'
  }, {
    id: 7,
    codeName: 'Ayumi',
    firstName: 'Ayumi',
    lastName: 'Test'
  }
];
*/

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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
