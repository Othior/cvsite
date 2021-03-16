import { Component, OnInit } from '@angular/core';
import { Formation } from "../Model/Formation";
import { ServiceAllPageService } from '../service/service-all-page.service';
import { HomeService } from '../service/homeService/home.service';
import { ElementImageContent } from '../Model/ElementImageContent';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  public title = '';
  public getOldUrl = JSON.parse(localStorage.getItem('routeOld'));

  constructor(
    private service: ServiceAllPageService,
    private homeService: HomeService
    ){}

  ngOnInit(): void {
    this.service.reloadPage();
  }
  
  personne = this.homeService.Personne;
  
  public list_reseau : Array<ElementImageContent> = this.homeService.list_reseaux;
  public list_backend : Array<ElementImageContent> = this.homeService.list_backend;
  public list_frontend : Array<ElementImageContent> = this.homeService.list_frontend;
  public list_langageDb : Array<ElementImageContent> = this.homeService.list_langageDb;
  public list_experiences : Array<Formation> = this.homeService.list_experiences;
  public list_etudes : Array<Formation> = this.homeService.list_etudes;



}


