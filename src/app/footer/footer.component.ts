import { Component} from '@angular/core';
import { element, Personne } from '../Model/Personne';
import { ElementImageContent, list_reseaux } from '../Model/Competence';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
personne : Personne = element;
list_reseaux : Array<ElementImageContent> = list_reseaux;

}
