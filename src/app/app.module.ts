import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
