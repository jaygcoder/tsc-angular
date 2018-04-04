import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { MembersComponent } from './members/members.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: 'members',
    component: MembersComponent
  }, {
    path: '',
    component: HomepageComponent
  }, {
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
