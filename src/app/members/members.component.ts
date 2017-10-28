import { Component, OnInit } from '@angular/core';


import { MemberService } from './member.service';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  title: 'Members';
  members: Member[];
  selectedMember: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    // get Members list from Service, convert to actual DB later
    this.memberService.getMembers()
      .subscribe(members => this.members = members,
          err => {
            console.log('Nope, didn\'t work!');
            console.log(err);
          });
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
