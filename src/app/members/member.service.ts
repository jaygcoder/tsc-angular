import { Injectable } from '@angular/core';

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

  getMembers(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }
}
