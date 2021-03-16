import { Component, OnInit } from '@angular/core';
import { Projet } from '../Model/Projet';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceAllPageService } from '../service/service-all-page.service';
import { ProjetService } from '../service/projetService/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit{

  constructor(
    private service: ServiceAllPageService,
    private projetService: ProjetService
  ){

  }
  ngOnInit(): void {
    this.service.reloadPage();
  }
  
  projet : Array<Projet> = this.projetService.list_Projet;

}
