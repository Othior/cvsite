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
      lien: "https://coffee-web-site.vercel.app/",
      description:' le projet "the Cafe" est un site web déjà créé de toute pièce sur le site w3schools qui fournissent des templates a refaire '
  },
  {
      nom: "Beacons hunt" ,
      image: this.url_image + "Beaconshunt_projet.png",
      lien: "https://beacons-hazel.vercel.app/",
      description:'le projet Beacons hunt est un site web ou l\'on peut crée des parcours , faire les parcours déjà créés , le but est de reprendre les balises sur la carte afin de finir le parcours'
  },
  {
      nom: "React Crypto" ,
      image: this.url_image + "react_crypto_projet.png",
      lien: "https://react-crypto-nu.vercel.app/",
      description:'projet de formation récupéré des données d\'une api et crée un recheche par nom '
  },
  {
      nom: "Jeux des paires" ,
      image: this.url_image + "jeux_des_paires_projet.png",
      lien: "https://jeux-des-paires.vercel.app/",
      description:' projet de formation le site est un jeu de societe ou l\'on doit chercher la meme carte '
  },
  {
      nom: "Projet Cepegra" ,
      image: this.url_image + "cepegra_projet.png",
      lien: "https://tes-three.vercel.app/",
      description:'projet de formation , le site consiste a crée un systeme d\'enregistrement ou de pointage, les nouvelles personnes peuvent s\'incrire mais aussi pointer et quand vient le temps de finir la journée la personne doit encore pointer en retour . le systeme d\'enregistrement nous donne un qrcode , grace a se qrcode nous pouvons pointer Entré/Sortie'
  },
  {
      nom: "Paymarv" ,
      image: this.url_image + "paymarv_projet.png",
      lien: "https://pay-marv.vercel.app/",
      description:'ce projet est ma création personnel , nous pouvons nous enregistrer et par après nous pouvons ajouter nos objet a payer ou chose a faire et pour finir enregistre nos url important '
  },

];

}
