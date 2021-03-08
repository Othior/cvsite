import { Component } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private isClicked: boolean = false;

  constructor() { }

  navbarBtn(){
    this.isClicked = !this.isClicked;
    let check = document.querySelector("#check").classList;

    if(this.isClicked){
      console.log('vrai ?' , this.isClicked)
      check.add("active")
      console.log('check ?' , check)
      
    }
    else{
      check.remove("active")
      console.log('faux ?' , this.isClicked)
    }
  }

  list_navbar: Array<Navbar> =  [
    {
      items: "Acceuil",
      link: ""
    },
    {
      items: "Projet",
      link: "projet"
    },
    {
      items: "Contact",
      link: "contact"
    }
  ];
}
export interface Navbar {
  items: string,
  link: string
}
