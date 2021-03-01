export { Formation , list_experiences , list_etudes}

interface Formation {
    date: string;
    intituler: string;
}
const list_experiences: Array<Formation> = 
[
    {
        date: " 01/2020- 02/2021 ",
        intituler: " Développeur Java/angular - DisneyChallenge Song c'est un site web basé sur un jeu de société"
    },
    {
        date: " 09/2020- 10/2020 ",
        intituler: " Développeur Front-end ReactJs / Vuejs - Projet Beacons hunt est site web ou l'on peut crée des parcours et faire des parcours de balade"
    },
    {
        date: " 11/2019- 12/2019 ",
        intituler: " Développeur .NET/C# - Netflax est un site web comme allociné"
    },
    {
        date: " 11/2018 - 12/2018 ",
        intituler: " Playzone Technobel  - Potapi c'est potager connectée"
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

const list_etudes: Array<Formation> = [
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