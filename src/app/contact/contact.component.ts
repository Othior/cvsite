import { Component, OnInit } from '@angular/core';
import { db, fire } from "../db/dbFire";
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public title :string = 'contact'; 
  public getOldUrl = JSON.parse(localStorage.getItem('routeOld'));

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){

  }
  ngOnInit(): void {
    if(this.router.url === JSON.parse(localStorage.getItem('routeOld'))){
      console.log("coucou")
    }else{
      console.log('non');
      localStorage.setItem('routeOld',JSON.stringify(this.router.url));
      location.reload();
      
    }
    console.log(this.router.url);
    console.log('routeold => ',JSON.parse(localStorage.getItem('routeOld')));
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
