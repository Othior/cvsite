import { Component } from '@angular/core';
import { element } from "../Model/Personne";
import { Formation ,list_etudes , list_experiences } from "../Model/Formation";
import {ElementImageContent ,list_backend , list_frontend , list_langageDb , list_reseaux } from '../Model/Competence';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  
  title = 'Home';
  personne = element;
  list_reseau : Array<ElementImageContent> = list_reseaux;
  list_backend : Array<ElementImageContent> = list_backend;
  list_frontend : Array<ElementImageContent> = list_frontend;
  list_langageDb : Array<ElementImageContent> = list_langageDb;
  list_experiences : Array<Formation> = list_experiences;
  list_etudes : Array<Formation> = list_etudes;

}


