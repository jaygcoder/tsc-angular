import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

// Components
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';
import { MembersComponent } from './members/members.component';

// Router
import { AppRoutingModule } from './app-routing.module';


// Services


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    HomepageComponent,
    MembersComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
