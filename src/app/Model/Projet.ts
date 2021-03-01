
export { Projet,list_Projet }

const url_image : string = "../../assets/";
interface Projet {
    nom: string,
    image: string,
    lien: string
}
const list_Projet : Array<Projet> = 
[
    {
        nom: "the Cafe" ,
        image: url_image + "cafe_projet.png",
        lien: "https://coffee-web-site.vercel.app/"
    },
    {
        nom: "Beacons hunt" ,
        image: url_image + "Beaconshunt_projet.png",
        lien: "https://beacons-hazel.vercel.app/"
    },
    {
        nom: "React Crypto" ,
        image: url_image + "react_crypto_projet.png",
        lien: "https://react-crypto-nu.vercel.app/"
    },
    {
        nom: "Jeux des paires" ,
        image: url_image + "jeux_des_paires_projet.png",
        lien: "https://jeux-des-paires.vercel.app/"
    },
    {
        nom: "Projet Cepegra" ,
        image: url_image + "cepegra_projet.png",
        lien: "https://tes-three.vercel.app/"
    },
    {
        nom: "Paymarv" ,
        image: url_image + "paymarv_projet.png",
        lien: "https://pay-marv.vercel.app/"
    },

]



