import { Component, OnInit } from '@angular/core';
import { db, fire } from "../db/dbFire";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {

  }

  contact(f: NgForm) {
    db.collection("contact").doc(f.value.objetMessage).set({
      nom: f.value.nom,
      prenom: f.value.prenom,
      email: f.value.email,
      objetMessage: f.value.objetMessage,
      message: f.value.message
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.log("Error writing document: ", error);
    })
  }

}
