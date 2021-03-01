
export { Projet,list_Projet }

class Projet {

    public nom:string;
    public image:string;
    public lien:string; 

    constructor(nom:string,image:string,lien:string){
        this.nom = nom;
        this.image = image;
        this.lien = lien;
    }

}
const url_image : string = "../../assets/";
const list_Projet : Array<Projet> = 
[
    new Projet("the Cafe", url_image + "cafe_projet.png" ,"https://coffee-web-site.vercel.app/"),
    new Projet("Beacons hunt", url_image + "Beaconshunt_projet.png" ,"https://beacons-hazel.vercel.app/"),
    new Projet("React Crypto", url_image + "react_crypto_projet.png" ,"https://react-crypto-nu.vercel.app/"),
    new Projet("Jeux des paires", url_image + "jeux_des_paires_projet.png" ,"https://jeux-des-paires.vercel.app/"),
    new Projet("Projet Cepegra", url_image + "cepegra_projet.png" ,"https://tes-three.vercel.app/"),
    new Projet("Paymarv", url_image + "paymarv_projet.png" ,"https://pay-marv.vercel.app/"),

]



