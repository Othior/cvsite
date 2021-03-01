import { Component } from '@angular/core';
import { element } from "./Model/Personne";
import { Formation ,list_etudes , list_experiences } from "./Model/Formation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Splingaire Marvyn';
}
