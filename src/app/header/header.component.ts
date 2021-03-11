import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  private isClicked: boolean = false;

  constructor() {
  }

  navbarBtn(){
    this.isClicked = !this.isClicked;
    let check = document.querySelector("#checkList").classList;
    this.isClicked ? check.add("active") : check.remove("active");
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
