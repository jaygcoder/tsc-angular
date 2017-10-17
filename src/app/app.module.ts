import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ]),
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
