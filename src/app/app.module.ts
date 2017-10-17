import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

import { MemberService } from './members/member.service';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'members',
        component: MembersComponent
      }
    ])
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
