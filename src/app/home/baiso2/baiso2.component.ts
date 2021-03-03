import { Component, OnInit } from '@angular/core';
import {HEROES} from '../user2';
import {Users} from '../users';

@Component({
  selector: 'app-baiso2',
  templateUrl: './baiso2.component.html',
  styleUrls: ['./baiso2.component.scss']
})
export class Baiso2Component implements OnInit {
  heroes = HEROES;
  selectedUser?: Users;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(users: Users): void {
    this.selectedUser = users;
  }
}
