import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { newContacts } from '../add-contact/add-contact.page';
import { ShowDetailsPage} from '../show-details/show-details.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //contacts = contactList;
  contacts : {first_name: string, last_name: string, phone1: number, phone2: number ,img: string}[];
  favContacts = favoriteList;
  showList = showUser;
  addedContacts: {first_name: string, last_name: string, phone1: number, phone2: number}[];
  constructor(private navController: NavController) {
    this.addedContacts = newContacts;

    setTimeout(() => {
      this.contacts = contactList;
    }, 3000);

  }
  addContact(){
    this.navController.navigateForward('add-contact');
    console.log("contact added");
  }


  showDetails(_item){
    this.navController.navigateForward('show-details');
    this.showList[0] = _item;
    console.log("item displayed");
    console.log(_item.first_name + "displayed");
  }

  delete(_item){
    const index = this.contacts.map(function(_item){return _item.first_name; }).indexOf(_item);
    this.contacts.splice(index,1);
    console.log(_item);
    console.log("item deleted");
  }

  markFav(_item){
    this.favContacts.push(_item);
    console.log(_item.first_name + "marked favorite");
    console.log(this.favContacts.length);
    console.log(this.favContacts[this.favContacts.length - 1]);
  }


}

export var contactList: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[] = [
  ];

export var favoriteList: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[] = [];

export var showUser: {first_name: string, last_name: string, phone1: number, phone2: number, img: string}[] = [];
