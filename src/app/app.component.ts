import { Component } from '@angular/core';
import { element } from "./Model/Personne";
import { Formation ,list_etudes , list_experiences } from "./Model/Formation";
import { Competence ,list_backend , list_frontend , list_langageDb , list_reseaux } from "./Model/Competence";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Splingaire Marvyn';
}
