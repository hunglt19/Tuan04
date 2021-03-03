import { Component, OnInit } from '@angular/core';
import {Users} from '../users';

@Component({
  selector: 'app-bai01',
  templateUrl: './bai01.component.html',
  styleUrls: ['./bai01.component.scss']
})
export class Bai01Component implements OnInit {

  constructor() { }
  user: Users = {
    id: 1,
    name: 'Le Trong Hung',
    salary: 1543.2798
  };
  ngOnInit(): void {
  }

}
