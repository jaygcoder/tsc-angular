import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

import { Observable } from 'rxjs/Rx';

import { MemberService } from './member.service';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit, AfterViewChecked {
  title: 'Members';
  certifiedMembers: Member[];
  honoraryMembers: Member[];
  selectedMember: Member;
  loading: boolean;

  constructor(
    private memberService: MemberService,
    public ngProgress: NgProgress
  ) {}

  ngOnInit() {
    this.ngProgress.start();
    this.getMembers('Certified');
    this.getMembers('Honorary');
    this.loading = true;
  }

  ngAfterViewChecked() {
    this.ngProgress.done();
    this.loading = false;
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
