import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { MemberService } from './member.service';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  title: 'Members';
  certifiedMembers: Member[];
  honoraryMembers: Member[];
  selectedMember: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers('Certified');
    this.getMembers('Honorary');
  }

  getMembers(type: string): void {
    // get Members list from Service, convert to actual DB later
    const memberHolder: Observable<Member[]> = this.memberService.getMembersByType(type);
    if (type === 'Certified') {
      memberHolder.subscribe(members => this.certifiedMembers = members,
        err => {
          console.log('Error!');
          console.log(err);
        });
    } else if (type === 'Honorary') {
      memberHolder.subscribe(members => this.honoraryMembers = members,
        err => {
          console.log('Error!');
          console.log(err);
        });
    }
  }


  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
