import { Component, OnInit } from '@angular/core';

import { MemberService } from './member.service';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  members: Member[];
  selectedMember: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    // get Members list from Service, convert to actual DB later
    this.memberService.getMembers()
      .then(members => this.members = members);
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
