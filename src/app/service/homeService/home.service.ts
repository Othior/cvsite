import { Injectable } from '@angular/core';
import { Formation } from 'src/app/Model/Formation';
import { ElementImageContent } from '../../Model/ElementImageContent';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
  ) { }

  private url_image : string = "../../assets/";

  public list_backend : Array<ElementImageContent> = [
    {
        image: this.url_image + "c.svg",
        content: " C# "
    },
    {
        image: this.url_image + "java.svg",
        content: " Java"
    },
    {
        image: this.url_image + "node.svg",
        content: " NodeJs "
    },
    {
        image: this.url_image + "python.svg",
        content: " Python "
    },
    {
        image: this.url_image + "php.svg",
        content: " PHP"
    }
];

  public list_frontend : Array<ElementImageContent> = [
    {
        image: this.url_image + "angular.svg",
        content: " Angular "
    },
    {
        image: this.url_image + "react.svg",
        content: " Reactjs "
    },
    {
        image: this.url_image + "vue.svg",
        content: " Vuejs "
    },
    {
        image: this.url_image + "bootstrap.svg",
        content: " Bootstrap 4 "
    },
    {
        image: this.url_image + "html.svg ",
        content: " HTML / CSS "
    }
];

  public list_reseaux : Array<ElementImageContent> = [
    {
        image: this.url_image + "linkedin.png" ,
        content: "https://www.linkedin.com/in/marvyn-splingaire-675849191/"
    },
    {
        image: this.url_image + "github.png" ,
        content: "https://github.com/Othior"
    }
];

  public list_langageDb: Array<ElementImageContent> = [
    {
        image: this.url_image + "db.svg" ,
        content: " MySQL "
    },
    {
        image: this.url_image + "db.svg" ,
        content: " T-SQL "
    },
    {
        image: this.url_image + "db.svg" ,
        content: " NOSQL "
    }
]

  public list_experiences: Array<Formation> = 
[
    {
        date: " 01/2020- 02/2021 ",
        intituler: " Développeur Java/angular - DisneyChallenge Song c'est un site web basé sur un jeu de société"
    },
    {
        date: " 09/2020- 10/2020 ",
        intituler: " Développeur Front-end ReactJs / Vuejs - Projet Beacons hunt est un site web où l'on peut créer des parcours et faire des parcours de balade"
    },
    {
        date: " 11/2019- 12/2019 ",
        intituler: " Développeur .NET/C# - Netflax est un site web comme allociné"
    },
    {
        date: " 11/2018 - 12/2018 ",
        intituler: " Playzone Technobel  - Potapi est un potager connecté"
    },
    {
        date: " 09/2017 - 05/2018 ",
        intituler: " Electricien - Wauthier CTP  "
    }, 
    {
        date: " 09/2013 - 05/2016 ",
        intituler: " Technicien pc - SPW Namur Maintenance PC"
    }
];

  public list_etudes: Array<Formation> = [
    {
        date: "09/2020- 02/2021",
        intituler: "TechnofuturTic - Gosselie Développeur Java Angular - Cours théorique - Travail d’équipe - Labo pratique"
    },
    {
        date: " 05/2019 - 09/2020 ",
        intituler: "Cepegra - Gosselies Développeur Front-end - Cours théorique - Travail d’équipe - Labo pratique"
    },
    {
        date: " 07/2019 - 12/2019 ",
        intituler: "TechnofuturTic -Gosselies Développeur .NET Sharepoint - Cours théorique - Travail d’équipe - Labo pratique"
    },
    {
        date: " 09/2018 - 12/2018 ",
        intituler: "Technobel - Ciney Expert IOT - Cours théorique - Travail d'équipe - Labo pratique"
    },
    {
        date: " 09/2016 - 05/2018 ",
        intituler: "IFAPME Namur Electricité - Formation alternance cours - Apprentissage métiers"
    }, 
    {
        date: " 09/2013 - 05/2016 ",
        intituler: " IFAPME Namur Technicien et réparateur PC - Formation alternance cours - Apprentissage métiers"
    }
];

    public Personne = 
{
    Nom : "Splingaire",
    Prenom : "Marvyn",
    Adresse : "Wallonie / Namur / Spy",
    Role : "Développeur Full Stack",
    Mail : "splingaire.marvyn@gmail.com",
    Tel : "+32 496/21.32.75"
}

}
