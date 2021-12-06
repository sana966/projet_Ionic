import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactList } from '../tab1/tab1.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})



export class AddContactPage implements OnInit {

  addGroup: FormGroup;
  newCon = newContacts;

  constructor( formBuilder: FormBuilder, private router: Router) {
    //contactList.push(this.addGroup.value);
    this.addGroup = formBuilder.group(
      {
        first_name: ["", [Validators.compose([Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(3)])]],
        last_name: ["", [Validators.compose([Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(3)])]],
        phone1: ["", [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])]],
        phone2: ["", [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])]]
      }
    );

   }

  ngOnInit() {
  }

  addContact(){
    this.newCon = this.addGroup.value;
    contactList.unshift(this.addGroup.value);
    console.log("Contact Saved Successfully");
    console.log(this.newCon);



      this.router.navigate(['/tabs']);


  }

}

export var newContacts: {first_name: string, last_name: string, phone1: number, phone2: number}[];

