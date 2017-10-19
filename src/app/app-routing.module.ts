import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: 'members',
    component: MembersComponent
  }, {
    path: '',
    component: HomepageComponent
  }, {
    path: 'member-details/:id',
    component: MemberDetailComponent
  }, {
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
