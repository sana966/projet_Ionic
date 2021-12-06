import { Component, OnInit } from '@angular/core';
import { showUser } from '../tab1/tab1.page';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit {
  displayUser: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[];
  constructor() {
    this.displayUser = showUser;
    console.log(this.displayUser);
  }
  ngOnInit() {
  }

}
