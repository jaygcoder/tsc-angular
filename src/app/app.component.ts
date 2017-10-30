import { Component, OnInit } from '@angular/core';

import { Member } from './members/member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'The Story Circle';
  slogan = 'Living the Magic, Sharing the Smiles';
  year = new Date().getFullYear().toString();

  ngOnInit() {

  }
}
