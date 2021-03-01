import { Component } from '@angular/core';
import { list_Projet, Projet } from '../Model/Projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  projet : Array<Projet> = list_Projet;

}
