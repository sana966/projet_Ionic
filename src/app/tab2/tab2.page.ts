import { Component } from '@angular/core';
import { favoriteList, Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favorites: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[]  ;

  constructor() {
    this.favorites= favoriteList;
    console.log(this.favorites);
    console.log(this.favorites.length);
  }
  contactListAmis: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[] = [
    ];
  contactListFamille: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[] = [
   ];
  contactListAutres: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[] = [
     ];
}

