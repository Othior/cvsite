import { Component, OnInit } from '@angular/core';
import { list_Projet, Projet } from '../Model/Projet';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit{

  public title :string = 'projet';
  public getOldUrl = JSON.parse(localStorage.getItem('routeOld'));

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){

  }
  ngOnInit(): void {
    
    this.reloadPage();
  }
  reloadPage(){
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
  projet : Array<Projet> = list_Projet;

}
