import { Component, Input, OnInit, Output } from '@angular/core';
import { ElementImageContent } from '../Model/ElementImageContent';
import { HomeService } from '../service/homeService/home.service';

@Component({
  selector: 'Competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  @Input() listCompetence: Array<ElementImageContent>;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
