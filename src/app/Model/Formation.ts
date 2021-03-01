export { Formation , list_experiences , list_etudes}

class Formation {
    public date: string;
    public intituler: string;

    constructor(date: string, intituler: string) {
        this.date = date;
        this.intituler = intituler;
    }
}
const list_experiences: Array<Formation> = [
    new Formation(" 01/2020- 02/2021 ", " Développeur Java/angular - DisneyChallenge Song c'est un site web basé sur un jeu de société"),
    new Formation(" 09/2020- 10/2020 ", " Développeur Front-end ReactJs / Vuejs - Projet Beacons hunt est site web ou l'on peut crée des parcours et faire des parcours de balade"),
    new Formation(" 11/2019- 12/2019 ", " Développeur .NET/C# - Netflax est un site web comme allociné"),
    new Formation(" 11/2018 - 12/2018 ", " Playzone Technobel  - Potapi c'est potager connectée"),
    new Formation(" 09/2017 - 05/2018 ", " Electricien - Wauthier CTP  "),
    new Formation(" 09/2013 - 05/2016 ", " Technicien pc - SPW Namur Maintenance PC")
];

const list_etudes: Array<Formation> = [
    new Formation("09/2020- 02/2021", "TechnofuturTic - Gosselie Développeur Java Angular - Cours théorique - Travail d’équipe - Labo pratique"),
    new Formation(" 05/2019 - 09/2020 ", "Cepegra - Gosselies Développeur Front-end - Cours théorique - Travail d’équipe - Labo pratique"),
    new Formation(" 07/2019 - 12/2019 ", "TechnofuturTic -Gosselies Développeur .NET Sharepoint - Cours théorique - Travail d’équipe - Labo pratique"),
    new Formation(" 09/2018 - 12/2018 ", "Technobel - Ciney Expert IOT - Cours théorique - Travail d'équipe - Labo pratique"),
    new Formation(" 09/2016 - 05/2018 ", "IFAPME Namur Electricité - Formation alternance cours - Apprentissage métiers"),
    new Formation(" 09/2013 - 05/2016 ", " IFAPME Namur Technicien et réparateur PC - Formation alternance cours - Apprentissage métiers")
  ];