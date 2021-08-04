import { Injectable } from '@angular/core';
import { Projet } from 'src/app/Model/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { }

  private url_image : string = "../../assets/";

  public list_Projet : Array<Projet> = [
  {
      nom: "the Cafe" ,
      image: this.url_image + "cafe_projet.png",
      lien: "https://the-cafe-git-master-othior.vercel.app/",
      description:' Le projet "the Cafe" est un site web déjà créé de toute pièce sur le site w3schools qui fournit des templates à refaire '
  },
  {
      nom: "Beacons hunt" ,
      image: this.url_image + "Beaconshunt_projet.png",
      lien: "https://beacons-hazel.vercel.app/",
      description:'Le projet Beacons hunt est un site web où l\'on peut créer des parcours et faire les parcours déjà créés . Le but est de reprendre les balises sur la carte afin de finir le parcours'
  },
  {
      nom: "React Crypto" ,
      image: this.url_image + "react_crypto_projet.png",
      lien: "https://react-crypto-nu.vercel.app/",
      description:'Projet de formation où l\'on peut récupérer des données d\'une api et créer une recheche par nom '
  },
  {
      nom: "Jeux des paires" ,
      image: this.url_image + "jeux_des_paires_projet.png",
      lien: "https://jeux-des-paires.vercel.app/",
      description:' Projet de formation , le site est un jeu de société où l\'on doit chercher 2 cartes identiques '
  },
  {
      nom: "Projet Cepegra" ,
      image: this.url_image + "cepegra_projet.png",
      lien: "https://tes-three.vercel.app/",
      description:'Projet de formation , le site consiste à créer un système d\'enregistrement ou de pointage, les nouvelles personnes peuvent s\'inscrire mais aussi pointer. A la fin de la journée , la personne doit pointer sa sortie . le système d\'enregistrement nous donne un qrcode , grâce à ce qrcode nous pouvons pointer Entrée/Sortie'
  },
  {
      nom: "Paymarv" ,
      image: this.url_image + "paymarv_projet.png",
      lien: "https://pay-marv.vercel.app/",
      description:'Ce projet est ma création personnelle , nous pouvons nous enregistrer et par après nous pouvons ajouter nos objets à payer ou choses à faire et pour finir enregistrer nos url importants '
  },
  {
    nom: "Ssyncronime" ,
    image: this.url_image + "paymarv_projet.png",
    lien: "https://ssyncronime.vercel.app/accueil",
    description:'Ce projet est le site web d\'une cliente. C\'est un site vitrine pour l\'entreprise de la personne ainsi que décrire ce qu\'est l\'hypnose   '
  }

];

}
