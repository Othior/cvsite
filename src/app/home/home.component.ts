import { Component, OnInit } from '@angular/core';
import { element } from "../Model/Personne";
import { Formation ,list_etudes , list_experiences } from "../Model/Formation";
import {ElementImageContent ,list_backend , list_frontend , list_langageDb , list_reseaux } from '../Model/Competence';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  public title = '';
  public getOldUrl = JSON.parse(localStorage.getItem('routeOld'));

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){
    }

  ngOnInit(): void {
  }
  
  reloadPage(): void {
    if(this.router.url === JSON.parse(localStorage.getItem('routeOld'))){
      console.log("coucou")
    }else{
      console.log('non');
      localStorage.setItem('routeOld',JSON.stringify(this.router.url));
      location.reload();
    }
    console.log('router home => ',this.router.url);
    console.log('routeold => ',JSON.parse(localStorage.getItem('routeOld')));
  }
  
  personne = element;
  list_reseau : Array<ElementImageContent> = list_reseaux;
  list_backend : Array<ElementImageContent> = list_backend;
  list_frontend : Array<ElementImageContent> = list_frontend;
  list_langageDb : Array<ElementImageContent> = list_langageDb;
  list_experiences : Array<Formation> = list_experiences;
  list_etudes : Array<Formation> = list_etudes;



}


