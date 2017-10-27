import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';

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

@Injectable()
export class MemberService {

  private url = 'https://my.api.mockaroo.com/members.json?key=9746c0c0';

  constructor(
    private http: Http
  ) {}

  getMembers(): Promise<Member[]> {
    return this.http.get(this.url)
        .toPromise()
        .then(res => res.json().data as Member[])
        .catch(this.handleError);
  }

  getMember(id: number): Promise<Member> {
    return this.getMembers()
            .then(members => members.find(member => member.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
