import { Component, OnInit } from '@angular/core';
import { db, fire } from "../db/dbFire";
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceAllPageService } from '../service/service-all-page.service';


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
    private router: Router,
    private service: ServiceAllPageService
  ){

  }
  ngOnInit(): void {
    this.service.reloadPage();
  }

  contact(f: NgForm) {
    db.collection("contact").doc(f.value.objetMessage).set({
      nom: f.value.nom,
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
