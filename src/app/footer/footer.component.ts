import { Component} from '@angular/core';
import { Personne } from '../Model/Personne';
import { HomeService } from '../service/homeService/home.service';
import { ElementImageContent } from '../Model/ElementImageContent';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  constructor(
    private service: HomeService
    )
  {
  }

personne : Personne = this.service.Personne;

list_reseaux : Array<ElementImageContent> = this.service.list_reseaux;

}
