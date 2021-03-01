import { Component} from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor() { this.addListNavbar(); }

  list_navbar: Array<Navbar>;

  addListNavbar(){
    this.list_navbar = [
      new Navbar("Acceuil",""),
      new Navbar("Projet","projet"),
      new Navbar("Contact","contact"),
    ]
  }
}
class Navbar{
  public items:string;
  public link:string;
  constructor(items:string,link:string){
    this.items = items;
    this.link = link;
  }
}
