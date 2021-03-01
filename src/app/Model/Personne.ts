export class Personne{
    public Nom : string;
    public Prenom : string;
    public Adresse : string;
    public Role : string;
    public Mail : string;
    public Tel : string;
    
    constructor( nom : string, prenom : string , adresse : string,role : string, mail : string, tel : string){
        this.Nom = nom;
        this.Prenom = prenom;
        this.Adresse = adresse;
        this.Role = role;
        this.Mail = mail;
        this.Tel = tel;
    }
}

export const element = new Personne("Splingaire","Marvyn","Wallonie / Namur / Spy","Développeur Full Stack","splingaire.marvyn@gmail.com","+32 496/21.32.75");

