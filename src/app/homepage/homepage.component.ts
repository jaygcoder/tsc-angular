import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  slogan = 'Living the Magic, Sharing the Smiles';
  lede = 'The Philippines\' top study group for close-up magicians, mentalists, hobbyists, and enthusiasts.';

  constructor() { }

  ngOnInit() {
  }

}
